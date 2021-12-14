import * as vscode from 'vscode'
import { blankLineDown, blankLineUp } from '../helpers/line-search'
import { lineAtSafe } from '../helpers/document'

/**
 * Move to the previous code paragraph.
 * @param textEditor A VS Code TextEditor
 * @param selectText If text should be selected when moving or not
 */
export function paragraphMoveUp(textEditor: vscode.TextEditor, selectText: boolean): void {
  const anchor = textEditor.selection.anchor

  let newPosition = blankLineUp(textEditor)
  let newSelection = new vscode.Selection(selectText ? anchor : newPosition, newPosition)

  textEditor.selection = newSelection

  textEditor.revealRange(new vscode.Range(newPosition, newPosition))

}

/**
 * Move to the next code paragraph.
 * @param textEditor A VS Code TextEditor
 * @param selectText If text should be selected when moving or not
 */
export function paragraphMoveDown(textEditor: vscode.TextEditor, selectText: boolean): void {
  const anchor = textEditor.selection.anchor

  let newPosition = blankLineDown(textEditor)
  let newSelection = new vscode.Selection(selectText ? anchor : newPosition, newPosition)

  textEditor.selection = newSelection

  textEditor.revealRange(new vscode.Range(newPosition, newPosition))
}

/**
 * Expand the selection to the current text paragraph.
 * @param textEditor A VS Code TextEditor
 */
export function paragraphExpandSelection(textEditor: vscode.TextEditor): void {
  const lineNumber = textEditor.selection.active.line
  const line = textEditor.document.lineAt(lineNumber)

  // Only expand to paragraphs if user is inside an actual paragraph
  // TODO: Should we warn the user for for better usability?
  if (line.isEmptyOrWhitespace) return

  let prev = blankLineUp(textEditor)
  let next = blankLineDown(textEditor)

  let prevLine = textEditor.document.lineAt(prev.line)
  let nextLine = textEditor.document.lineAt(next.line)

  const document = textEditor.document

  // If the prev or next lines are blank but still want to expand the selection to a paragraph,
  // we'll shrink the selection just enough to accomodate to the paragraph boundaries.
  // Eg: paragraph that starts on the top or ends on the bottom of the file
  if (prevLine.isEmptyOrWhitespace) prevLine = lineAtSafe(prev.line + 1, document)
  if (nextLine.isEmptyOrWhitespace) nextLine = lineAtSafe(next.line - 1, document)

  let start = new vscode.Position(prevLine.lineNumber, prevLine.firstNonWhitespaceCharacterIndex)
  let end = new vscode.Position(nextLine.lineNumber, nextLine.text.length)

  const newSelection = new vscode.Selection(start, end)

  textEditor.selection = newSelection

  textEditor.revealRange(new vscode.Range(newSelection.start, newSelection.end))
}