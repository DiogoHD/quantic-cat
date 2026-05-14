import Cat from "../entities/cat"
import Fish from "../entities/fish"
import type { CellProps, MapProps } from "../types/map"

function Cell({ index, children }: CellProps) {
  return (
    <div className="relative border-2 border-white aspect-square flex items-center justify-center size-20">
      {children}
      <span className="absolute bottom-1 left-1 text-[10px] text-amber-600 leading-none">
        {index}
      </span>
    </div>
  );
}

export default function Map({ rows, cols, catPosition, fishPosition }: MapProps) {
  const total = rows * cols;

  const catIndex = catPosition[1] * cols + catPosition[0];
  const fishIndex = fishPosition[1] * cols + fishPosition[0];
  
  console.log("Cat position:", catPosition, "Fish position:", fishPosition);

  return (
    <div
      className="border-8 border-amber-800"
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: total }, (_, i) => (
        <Cell key={i} index={i}>
          {i === catIndex && <Cat />}
          {i === fishIndex && <Fish />}
        </Cell>
      ))}
    </div>
  );
}