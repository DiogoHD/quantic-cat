import type { Position, PositionPhase } from "../types/position";

export function computeCatPosition(
  catStartPosition: PositionPhase[],
  cols: number,
  lines: string[], 
  fishPositions?: Position[],
  waves?: PositionPhase[]
) : { 
  cats: PositionPhase[];
  fishesCaught: boolean[] } 
{
  let cats = catStartPosition;
  let fishesCaught: boolean[] = fishPositions ? fishPositions.map(() => false) : [];

  for (const line of lines) {
    let newPositions: Position[] = [];

    cats = cats.flatMap(([[x, y], phase]) => {
      // Gate ID
      // Moves t\he cat to the right
      if (line === "qc.id(0)") {
        console.log("Applying ID gate to cat at", [x, y]);
        newPositions = [clamp([x + 1, y], cols)];
      }

      // Gate X
      // Moves the cat to the right and changes the row
      else if (line === "qc.x(0)") {
        console.log("Applying X gate to cat at", [x, y]);
        newPositions = [clamp([x + 1, y === 0 ? 1 : 0], cols)];
      }

      // Gate H
      else if (line === "qc.h(0)") {
        if (cats.length === 1) {
          // Superposition: Cat is on both sides at the same time
          newPositions = [
            clamp([x + 1, y], cols),
            clamp([x + 1, y === 0 ? 1 : 0], cols),
          ];
        } else {
          // Collapse: If the cat is in superposition, it collapses to the state it was before
          newPositions = y === cats[0][0][1] ? [clamp([x + 1, y], cols)] : [];
        }
      }

      // When the line is a unknown command, we do not change the cat's position
      else {
        newPositions = [clamp([x, y], cols)];
      }

      // If there are waves, we need to check if the cat will be affected by them
      if (waves) {
        newPositions = newPositions.filter(([nx, ny]) => {
          const wave = waves.find(([[wx, wy]]) => wx === nx && wy === ny);
          if (!wave) return true; // No wave at the new position, cat is safe
          return wave[1] === phase; // Cat is only affected if the wave phase matches the cat's phase
        });
      }

      return newPositions.map(pos => [pos, phase] as PositionPhase);
    });

    // Check if the fishes were caught after each line
    if (fishPositions) {
      fishesCaught = fishesCaught.map((alreadyCaught, i) => {
        if (alreadyCaught) return true; // já apanhado antes, mantém
        const [fx, fy] = fishPositions[i];
        return cats.some(([[cx, cy], _]) => cx === fx && cy === fy);
      });
    }
  }

  return { cats, fishesCaught };
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