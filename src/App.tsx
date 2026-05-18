import { Map } from "./components/Map"
import { Description } from "./components/Description"
import { useState, useEffect } from "react";
import { computeCatPosition, isCatAtBox } from "./services/catEngine";
import type { PositionPhase, Position } from "./types/position";
import { levels } from "./data/levels";
import { PhaseBar } from "./components/PhaseBar";

export default function App() {
  const [ current, setCurrent ] = useState(0);
  const [ code, setCode ] = useState("");
  // Track completed levels
  const [ completed, setCompleted ] = useState<boolean[]>(() => levels.map(() => false));

  const levelMap = levels[current];
  const lines = code.split("\n").map(line => line.trim()).filter(line => line.length > 0);

  const { cats, fishesCaught } = computeCatPosition(
    levelMap.catPositions as PositionPhase[] , 
    levelMap.cols, 
    lines, 
    levelMap.fishPositions as Position[],
    levelMap.wavePositions as PositionPhase[]
  );
  const hasWon = levelMap.fishPositions
    ? fishesCaught.every(caught => caught) && isCatAtBox(cats.map(([pos]) => pos), levelMap.boxPositions as Position[])
    : isCatAtBox(cats.map(([pos]) => pos), levelMap.boxPositions as Position[]);

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
    <div className="min-h-screen flex text-white">
      {/* Left Side */}
      <div className="flex flex-1 items-center justify-center overflow-y-auto">
        <Description current={current} setCurrent={setCurrent} code={code} setCode={setCode} completed={completed} />
      </div>

      {/* Right Side */}
      <div className="flex min-w-[50vw] w-fit flex-col bg-gray-800 items-center justify-center p-8">
        {/* Title */}
        <div className="text-center">
          <p className="text-3xl font-black tracking-[0.2em] uppercase text-amber-400">
            {levelMap.title}
          </p>
        </div>

        {levelMap.wavePositions && (
          console.log("currentPhase:", cats[0][1]),
          <PhaseBar currentPhase={cats[0][1]} />
        )}

        <Map 
          cols={levelMap.cols} 
          cats={cats} 
          boxPositions={levelMap.boxPositions as Position[]} 
          fishPositions={levelMap.fishPositions as Position[]} 
          fishesCaught={fishesCaught}
          waves={levelMap.wavePositions as PositionPhase[]}
          hasWon={hasWon} 
        />
      </div>
    </div>
  )
}