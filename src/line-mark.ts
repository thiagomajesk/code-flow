import * as vscode from 'vscode'
import { lineSearch } from './utils/line-search'
import parseRegExp from './utils/regexp-parser'

/**
 * Returns the language marks config for the current language id.
 * @param textEditor A VS Code TextEditor
 * @returns The configured marks or default mark that only catches word characters.
 * @description Marks are used to define what can be considered an 'relevant' line to travel to.
 * Use positive lookbehind to jump to the main expression discard previous content.
 * Example: Occurrences of as after imports only: `/(?<=^import.*)as/`
 */
function getLanguageMarks(document: vscode.TextDocument): RegExp[] {
  const config = vscode.workspace.getConfiguration('code-flow.languageMarks')
  const currentLanguage = document.languageId
  const languageConfig = config.get<string[]>(currentLanguage, [])
  const marks = parseRegExp(languageConfig)
  return marks.length ? marks : [/^\w+/]
}

/**
 * Searchs for the first mark occurence on the line.
 * @param lineNumber
 * @param document
 * @returns Index of the first occurence or -1 if not was found.
 */
function indexOfMark(line: vscode.TextLine, document: vscode.TextDocument): number {
  const marks = getLanguageMarks(document)

  if (line.isEmptyOrWhitespace) return -1

  let validMatches = marks.map(m => lineSearch(line, m)).filter(i => i >= 0)

  //TODO: Right now we just take the lowest index occurrence, which means that the cursor will end up always closest to the line start.
  // Confirm if this is the desirable behavior or if we want to treat using an alternative approach.
  // One alternative is to calculate if the user is near the line start or near the line end and then suggest which mark is closest to his cursor.
  if (validMatches.length) return Math.min(...validMatches)

  return -1
}

/**
 * Returns next mark position looking up
 * @param textEditor
 * @returns New position or current if no mark was found
 */
export function nextMarkPositionUp(textEditor: vscode.TextEditor): vscode.Position {
  const document = textEditor.document
  const minLines = 0

  const lineNumber = textEditor.selection.active.line
  const nextLineNumber = lineNumber - 1

  for (var i = nextLineNumber; i >= minLines; i--) {
    let line = document.lineAt(i)
    let markIndex = indexOfMark(line, document)
    if (markIndex >= 0) return new vscode.Position(i, markIndex)
  }

  return textEditor.selection.active
}

/**
 * Returns next mark position looking down
 * @param textEditor
 * @returns New position or current if no mark was found
 */
export function nextMarkPositionDown(textEditor: vscode.TextEditor): vscode.Position {
  const document = textEditor.document
  const maxLines = document.lineCount - 1

  const lineNumber = textEditor.selection.active.line
  const nextLineNumber = lineNumber + 1

  for (var i = nextLineNumber; i <= maxLines; i++) {
    let line = document.lineAt(i)
    let markIndex = indexOfMark(line, document)
    if (markIndex >= 0) return new vscode.Position(i, markIndex)
  }

  return textEditor.selection.active
}