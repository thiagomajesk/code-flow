import { TextLine, TextEditor, Position } from 'vscode'
import { lineAtSafe } from './document'

/**
 * Search the line with the given regex.
 * @param line A VS Code TextLine.
 * @param regex The pattern to search.
 * @returns Index of first ocurrence or -1 if nothing was found.
 */
export function lineSearch(line: TextLine, regex: RegExp): number {
  const firstValidIndex = line.firstNonWhitespaceCharacterIndex
  const validSubstring = line.text.substr(firstValidIndex)

  let index = validSubstring.search(regex)

  // Offset the index considering the previously excluded whitespace
  return index >= 0 ? index + firstValidIndex : -1
}

/**
 * Returns the next blank line up in the document
 * @param textEditor
 * @returns The next blank line up or the start of the next line position if nothing found
 */
export function blankLineUp(textEditor: TextEditor): Position {
  const document = textEditor.document
  const minLines = 0

  const lineNumber = textEditor.selection.active.line
  const nextLine = lineAtSafe(lineNumber - 1, document)

  for (var i = nextLine.lineNumber; i >= minLines; i--) {
    let line = document.lineAt(i)
    if (line.isEmptyOrWhitespace) return new Position(i, line.text.length)
  }

  return new Position(minLines, nextLine.firstNonWhitespaceCharacterIndex)
}

/**
 * Returns the next blank line down in the document
 * @param textEditor
 * @returns The next blank line down or the start of the next line position if nothing found
 */
export function blankLineDown(textEditor: TextEditor): Position {
  const document = textEditor.document
  const maxLines = document.lineCount - 1

  const lineNumber = textEditor.selection.active.line
  const nextLine = lineAtSafe(lineNumber + 1, document)

  for (var i = nextLine.lineNumber; i <= maxLines; i++) {
    let line = document.lineAt(i)
    if (line.isEmptyOrWhitespace) return new Position(i, line.text.length)
  }

  return new Position(maxLines, nextLine.firstNonWhitespaceCharacterIndex)
}
