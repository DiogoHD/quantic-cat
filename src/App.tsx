import Map from "./components/map"
import Level from "./components/level"
import { useState } from "react";
import mapData from "./data/map.json";
import { computeCatPosition } from "./services/catEngine";

export default function App() {
  const [ current, setCurrent ] = useState(0);
  const [ code, setCode ] = useState("");
  const levelMap = mapData[current];

  const lines = code.split("\n").map(line => line.trim()).filter(line => line.length > 0);

  console.log(lines);

  return (
    <div className="h-screen w-screen flex bg-orange-500 text-white">
      {/* Left Side */}
      <div className="flex flex-1 bg-amber-200 items-center justify-center">
        <Level current={current} setCurrent={setCurrent} code={code} setCode={setCode} />
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-gray-800 flex items-center justify-center">
        <Map 
          rows={levelMap.rows} 
          cols={levelMap.cols} 
          catPosition={computeCatPosition(levelMap.catPosition, lines)} 
          fishPosition={levelMap.fishPosition} />
      </div>
    </div>
  )
}