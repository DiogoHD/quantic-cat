import { levels } from "../data/levels";
import type { LevelProps } from "../types/level";
import { useState, useRef, useEffect } from "react";
import { Check, Circle, ChevronDown } from "lucide-react"

const levelsWithTitles = levels.map((level, index, arr) => ({
  ...level,
  title: `Nível ${index + 1} de ${arr.length}`,
}));

export function Description({ current, setCurrent, code, setCode, completed }: LevelProps) {
  const level = levelsWithTitles[current];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLevelSelect = (index: number) => {
    // Only allow selecting completed levels or the next available one
    const isAccessible = index === 0 || completed[index - 1];
    if (!isAccessible) return;
    setCurrent(index);
    setCode("");
    setDropdownOpen(false);
  };

  return (
    <div className="h-screen w-full flex flex-col text-white font-mono">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 text-xl ">
        {/* Game title */}
        <span className="font-bold tracking-widest uppercase">
        Quantic Cat
        </span>

        {/* Level selector dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(prev => !prev)}
            className="flex items-center gap-2 px-3 py-1 text-sm border border-amber-700 rounded-sm hover:bg-amber-800/40 transition-colors hover:cursor-pointer"
          >
            <span>{current + 1}/{levelsWithTitles.length}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-amber-950 border border-amber-800 rounded-sm shadow-xl z-50 overflow-hidden">
              {levelsWithTitles.map((_, index) => {
                const isDone = completed[index];
                const isCurrent = index === current;
                const isAccessible = index === 0 || completed[index - 1];

                return (
                  <button
                    key={index}
                    onClick={() => handleLevelSelect(index)}
                    disabled={!isAccessible}
                    className={`
                      w-full flex items-center justify-between px-4 py-2 text-xs text-left transition-colors
                      ${isCurrent ? "bg-amber-800/60" : "hover:bg-amber-900/60"}
                      ${!isAccessible ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    <span className={isDone ? "text-green-400" : isCurrent ? "text-amber-300" : "text-amber-100"}>
                      Nível {index + 1}
                    </span>
                    <span>
                      {isDone ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : isCurrent ? (
                        <Circle className="w-3 h-3 text-amber-300" />
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="min-h-1 w-full bg-amber-900">
        <div
          className="h-full bg-amber-600 transition-all duration-500"
          style={{ width: `${(completed.filter(Boolean).length / levelsWithTitles.length) * 100}%` }}
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
      <div className="flex flex-1 flex-col px-6 py-4">
        <div className="flex flex-col flex-1 min-h-0 bg-[#1f180f] border border-amber-700 rounded-sm">
          
          {/* Editor header */}
          <div className="shrink-0 flex items-center gap-1.5 px-3 py-2 border-b border-amber-700/60 bg-[#0c190c]">
            <span className="text-xs">Python</span>
            <span className="text-xs ml-auto">Qiskit</span>
          </div>

          {/* Static prefix */}
          <div className="shrink-0 flex flex-col p-3 text-sm">
            <span>from qiskit import QuantumCircuit</span>
            <span>qc = QuantumCircuit(1)</span>
          </div>

          {/* Textarea */}
          <div className="flex flex-1 min-h-0 p-3">
            <textarea
              value={code}
              onChange={(e) => {
                const lines = e.target.value.split("\n");
                if (lines.length <= level.cols - 1) {
                  setCode(e.target.value);
                }
              }}
              className="flex-1 bg-transparent outline-none resize-none text-amber-300 text-sm leading-6 placeholder:text-amber-900 caret-amber-400"
              placeholder="qc.id(0)"
              rows={level.cols - 1}
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
          className="px-4 py-2 text-xs uppercase tracking-widest border border-amber-700 hover:bg-amber-900/40 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-sm hover:cursor-pointer"
        >
          ← Anterior
        </button>

        <button
          onClick={() => { setCurrent(Math.min(levelsWithTitles.length - 1, current + 1)); setCode(""); }}
          disabled={current === levelsWithTitles.length - 1 || !completed[current]}
          className="flex-1 py-2 text-xs uppercase tracking-widest bg-amber-700 hover:bg-amber-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-sm font-bold hover:cursor-pointer"
        >
          Próximo Nível →
        </button>
      </div>
    </div>
  );
}