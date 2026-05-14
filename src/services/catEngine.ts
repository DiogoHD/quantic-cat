import type { Position } from "../types/position";

export function computeCatPosition(startPosition: Position, lines: string[]): Position {
  let x = startPosition[0], y = startPosition[1];

  for (const line of lines) {
    if (line === "qc.id('cat')") x += 1;
    if (line === "qc.x('cat')") {
      y = y === 0 ? 1 : 0;
      x += 1;
    }

  }

  return [x, y];
}