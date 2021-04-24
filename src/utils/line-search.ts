import { TextLine } from 'vscode'

/**
 * Search the line with the given regex considering only valid content in the line.
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