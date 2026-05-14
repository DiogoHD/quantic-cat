import { Map } from "./components/map"
import { Level } from "./components/level"
import { useState } from "react";
import mapData from "./data/map.json";
import { computeCatPosition, isCatAtFish } from "./services/catEngine";
import type { Position } from "./types/position";

export default function App() {
  const [ current, setCurrent ] = useState(0);
  const [ code, setCode ] = useState("");

  const levelMap = mapData[current];
  const lines = code.split("\n").map(line => line.trim()).filter(line => line.length > 0);

  const catPosition = computeCatPosition(levelMap.catPosition as Position, levelMap.cols, lines);
  const hasWon = isCatAtFish(catPosition, levelMap.fishPosition as Position);

  return (
    <div className="min-h-screen w-screen flex text-white overflow-y-auto">
      {/* Left Side */}
      <div className="flex flex-1 bg-amber-200 items-center justify-center">
        <Level current={current} setCurrent={setCurrent} code={code} setCode={setCode} hasWon={hasWon} />
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
          catPosition={catPosition} 
          fishPosition={levelMap.fishPosition as Position} 
          hasWon={hasWon} 
        />
      </div>
    </div>
  )
}