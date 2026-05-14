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

export function Map({ cols, catPosition, fishPosition }: MapProps) {
  const catIndex = catPosition[1] * cols + catPosition[0];
  const fishIndex = fishPosition[1] * cols + fishPosition[0];

  return (
    <div className="flex flex-row">

      {/* Qubit Name */}
      <div className="flex border-8 border-r-0 border-amber-800 w-20">
        <p className="flex items-center justify-center text-lg font-bold uppercase text-center w-full h-full border-2 border-white">
          Cat 0
        </p>
      </div>

      {/* Qubit State */}
      <div className="grid grid-cols-1 grid-rows-2 items-center border-8 border-x-0 border-amber-800 w-20">
        <div className="flex h-full w-full border-2 border-white items-center justify-center">
          <p className="text-sm font-bold uppercase text-center">
            |0{'>'}
          </p>
        </div>
        <div className="flex h-full w-full border-2 border-white items-center justify-center">
          <p className="text-sm font-bold uppercase text-center">
            |1{'>'}
          </p>
        </div>
      </div>

      {/* Grid container */}
      <div className={`grid grid-rows-2 grid-cols-${cols} border-8 border-amber-800`} >
        {Array.from({ length: cols * 2 }, (_, i) => (
          <Cell key={i} index={i}>
            {i === catIndex && <Cat />}
            {i === fishIndex && <Fish />}
          </Cell>
        ))}
      </div>
    </div>
  );
}