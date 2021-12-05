/**
 * Helper to break text lines
 * @param text String
 * @returns String
 */
export function breakLines(text: string) {
  return text.split("\r\n").slice(0, -1);
}
