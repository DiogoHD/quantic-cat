import type { Position } from "../types/position";

export function computeCatPosition(startPositions: Position[], cols: number, lines: string[]): Position[] {
  let positions: Position[] = startPositions;

  for (const line of lines) {
    positions = positions.flatMap(([x, y]) => {
      // Gate ID
      // Moves t\he cat to the right
      if (line === "qc.id(0)") {
        return [clamp([x + 1, y], cols)];
      }

      // Gate X
      // Moves the cat to the right and changes the row
      if (line === "qc.x(0)") {
         return [clamp([x + 1, y === 0 ? 1 : 0], cols)];
      }

      // Gate H
      if (line === "qc.h(0)") {
        return [
          clamp([x + 1, y], cols), // Original position moves right
          clamp([x + 1, y === 0 ? 1 : 0], cols) // New cat in the other row
        ]
      }

      // Clamp position to map boundaries
      return [clamp([x, y], cols)];
    });
  }

  return positions;
}

export function isCatAtBox(catPositions: Position[], boxPositions: Position[]): boolean {
  const allBoxesCovered = boxPositions.every(([bx, by]) => 
    catPositions.some(([cx, cy]) => cx === bx && cy === by)
  );

  const allCatsInBoxes = catPositions.every(([cx, cy]) =>
    boxPositions.some(([bx, by]) => cx === bx && cy === by)
  );

  return allBoxesCovered && allCatsInBoxes;
}

function clamp(pos: Position, cols: number): Position {
  let [x, y] = pos;
  x = Math.max(0, Math.min(x, cols - 1));
  y = Math.max(0, Math.min(y, 2 - 1));
  return [x, y];
}