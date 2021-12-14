import { TextDocument, TextLine } from 'vscode'

/**
 * Returns a text line denoted by the line number within the document bounds.
 * @param line A line number
 * @param document A text document
 * @returns A text line
 */
export function lineAtSafe(line: number, document: TextDocument): TextLine {
  return document.lineAt(Math.min(Math.max(line, 0), document.lineCount - 1))
}