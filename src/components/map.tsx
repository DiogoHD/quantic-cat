import Cat from "../entities/cat"
import Fish from "../entities/fish"

interface CellProps {
  index: number;
  children?: React.ReactNode;
}

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

interface MapProps {
  rows: number;
  cols: number;
  catPosition: number;
  fishPosition: number;
}

export default function Map({ rows, cols, catPosition, fishPosition }: MapProps) {
  const total = rows * cols;

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
          {i === catPosition && <Cat />}
          {i === fishPosition && <Fish />}
        </Cell>
      ))}
    </div>
  );
}