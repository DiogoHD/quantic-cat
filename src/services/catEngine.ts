

export function computeCatPosition(startPosition: number, lines: string[]): number {
  let pos = startPosition;

  for (const line of lines) {
    if (line === "qc.id('cat')") pos += 1;
    // if (line === "qc.x(0)") pos += cols;
  }

  return pos;
}