function parseOrNull(str: string): RegExp | null {
  try { return new RegExp(str) } catch (e) { return null }
}

/**
 * Parse the given array of strings as regex expressions.
 * @param items List of regex expressions as strings.
 * @return List of valid RegExp or empty if there's no valid expressions.
 */
export default function parse(items: string[]) : any {
  return items.map(str => parseOrNull(str)).filter(r => r != null)
}