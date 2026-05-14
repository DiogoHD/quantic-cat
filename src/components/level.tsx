import { descriptions } from "../data/descriptions";
import type { LevelProps } from "../types/level";

const descriptionsWithTitles = descriptions.map((level, _, arr) => ({
  ...level,
  title: `Nível ${level.id} de ${arr.length}`,
}));

export function Level({ current, setCurrent, code, setCode, hasWon }: LevelProps) {
  const level = descriptionsWithTitles[current];

  return (
    <div className="h-screen w-full flex flex-col bg-amber-600/70 text-white font-mono">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900 text-xl ">
        <span className="font-bold tracking-widest uppercase">
        Quantic Cat
        </span>
        <span className="">
          {level.id}/{descriptionsWithTitles.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-amber-800">
        <div
          className="h-full bg-amber-500 transition-all duration-500"
          style={{ width: `${(level.id / descriptionsWithTitles.length) * 100}%` }}
        />
      </div>

      {/* Title */}
      <div className="flex items-center justify-center">
        <h1 className="text-sm font-bold uppercase">
          {level.title}
        </h1>
      </div>

      {/* Description */}
      <div className="px-6 py-4 text-sm">
        {level.description}
      </div>

      {/* Code editor */}
      <div className="px-6 py-4">
        <div className="bg-[#1f180f] border border-amber-900 rounded-sm">
          {/* Editor header */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-amber-900/60 bg-[#0c190c]">
            <span className="text-xs">Python</span>
            <span className="text-xs ml-auto">Qiskit</span>
          </div>

          {/* Static prefix */}
          <div className="flex flex-col p-3 text-sm">
            <span>from qiskit import QuantumCircuit</span>
            <span>qc = QuantumCircuit(1)</span>
          </div>

          {/* Textarea */}
          <div className="flex p-3">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-transparent outline-none resize-none text-amber-300 text-sm leading-6 placeholder:text-amber-800 caret-amber-400"
              rows={3}
              placeholder="qc.id(0)"
              spellCheck={false}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 pb-6 flex items-center justify-between gap-3">
        <button
          onClick={() => { setCurrent(Math.max(0, current - 1)); setCode(""); }}
          disabled={current === 0}
          className="px-4 py-2 text-xs uppercase tracking-widest border border-amber-800 hover:bg-amber-900/40 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-sm hover:cursor-pointer"
        >
          ← Anterior
        </button>

        <button
          onClick={() => { setCurrent(Math.min(descriptionsWithTitles.length - 1, current + 1)); setCode(""); }}
          disabled={current === descriptionsWithTitles.length - 1 || !hasWon}
          className="flex-1 py-2 text-xs uppercase tracking-widest bg-amber-700 hover:bg-amber-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-sm font-bold hover:cursor-pointer"
        >
          Próximo Nível →
        </button>
      </div>
    </div>
  );
}