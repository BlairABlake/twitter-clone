export function compactString(x: number): string {
  if (x > 1000) {
    return (x / 1000).toFixed(1).toString() + "k"
  }
  return x.toString()
}
