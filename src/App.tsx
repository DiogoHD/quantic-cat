import { Map } from "./components/map"
import { Description } from "./components/description"
import { useState, useEffect } from "react";
import { computeCatPosition, isCatAtBox } from "./services/catEngine";
import type { Position } from "./types/position";
import type { Phases } from "./types/phase";
import { levels } from "./data/levels";

export default function App() {
  const [ current, setCurrent ] = useState(0);
  const [ code, setCode ] = useState("");
  // Track completed levels
  const [completed, setCompleted] = useState<boolean[]>(() => levels.map(() => false));

  const levelMap = levels[current];
  const lines = code.split("\n").map(line => line.trim()).filter(line => line.length > 0);

  const { catPositions, fishesCaught } = computeCatPosition(levelMap.catPositions as Position[], levelMap.cols, lines, levelMap.fishPositions as Position[]);
  const hasWon = levelMap.fishPositions
    ? fishesCaught.every(caught => caught) && isCatAtBox(catPositions, levelMap.boxPositions as Position[])
    : isCatAtBox(catPositions, levelMap.boxPositions as Position[]);

  useEffect(() => {
    if (hasWon) {
      setCompleted(prev => {
        const next = [...prev];
        next[current] = true;
        return next;
      });
    }
  }, [hasWon, current]);


  return (
    <div className="min-h-screen w-screen flex text-white overflow-y-auto">
      {/* Left Side */}
      <div className="flex flex-1 bg-amber-200 items-center justify-center">
        <Description current={current} setCurrent={setCurrent} code={code} setCode={setCode} completed={completed} />
      </div>

      {/* Right Side */}
      <div className="flex flex-1 flex-col bg-gray-800 items-center justify-center">
        {/* Title */}
        <div className="mb-6 text-center">
          <p className="text-3xl font-black tracking-[0.2em] uppercase text-amber-400">
            {levelMap.title}
          </p>
        </div>

        <Map 
          cols={levelMap.cols} 
          catPositions={catPositions as Position[]} 
          boxPositions={levelMap.boxPositions as Position[]} 
          fishPositions={levelMap.fishPositions as Position[]} 
          fishesCaught={fishesCaught}
          wavePositions={levelMap.wavePositions as Position[]}
          wavePhases={levelMap.wavePhases as Phases[]}
          hasWon={hasWon} 
        />
      </div>
    </div>
  )
}