import type { Position } from "../types/position";

export function computeCatPosition(
  startPositions: Position[], 
  cols: number,
  lines: string[], 
  fishPositions?: Position[]
) : { 
  catPositions: Position[]; 
  fishesCaught: boolean[] } 
{
  let catPositions: Position[] = startPositions;
  let fishesCaught: boolean[] = fishPositions ? fishPositions.map(() => false) : [];

  for (const line of lines) {
    catPositions = catPositions.flatMap(([x, y]) => {
      // Gate ID
      // Moves t\he cat to the right
      if (line === "qc.id(0)") {
        console.log("Applying ID gate to cat at", [x, y]);
        return [clamp([x + 1, y], cols)];
      }

      // Gate X
      // Moves the cat to the right and changes the row
      if (line === "qc.x(0)") {
        console.log("Applying X gate to cat at", [x, y]);
         return [clamp([x + 1, y === 0 ? 1 : 0], cols)];
      }

      // Gate H
      if (line === "qc.h(0)") {
        if (catPositions.length === 1) {
          // Superposition: Cat is on both sides at the same time
          return [
            clamp([x + 1, y], cols),
            clamp([x + 1, y === 0 ? 1 : 0], cols),
          ];
        } else {
          // Collapse: If the cat is in superposition, it collapses to the state it was before
          return y === catPositions[0][1] ? [clamp([x + 1, y], cols)] : [];
        }
      }

      // Clamp position to map boundaries
      return [clamp([x, y], cols)];
    });

    // Check if the fishes were caught after each line
    if (fishPositions) {
      fishesCaught = fishesCaught.map((alreadyCaught, i) => {
        if (alreadyCaught) return true; // já apanhado antes, mantém
        const [fx, fy] = fishPositions[i];
        return catPositions.some(([cx, cy]) => cx === fx && cy === fy);
      });
    }
  }

  return { catPositions, fishesCaught };
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