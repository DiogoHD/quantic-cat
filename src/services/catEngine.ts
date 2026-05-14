import type { Position } from "../types/position";

export function computeCatPosition(startPosition: Position, cols: number, rows: number, lines: string[]): Position {
  let [x, y] = startPosition;

  for (const line of lines) {
    // Gate ID
    if (line === "qc.id('cat')") {
      if (x + 1 < cols) x += 1;
    }

    // Gate X
    if (line === "qc.x('cat')") {
      y = y === 0 ? 1 : 0;
      x += 1;
    }

    // Clamp position to map boundaries
    [x, y] = clamp([x, y], rows, cols);
  }

  return [x, y];
}

export function isCatAtFish(catPosition: Position, fishPosition: Position): boolean {
  return catPosition[0] === fishPosition[0] && catPosition[1] === fishPosition[1];
}

function clamp(pos: Position, rows: number, cols: number): Position {
  let [x, y] = pos;
  x = Math.max(0, Math.min(x, cols - 1));
  y = Math.max(0, Math.min(y, rows - 1));
  return [x, y];
}