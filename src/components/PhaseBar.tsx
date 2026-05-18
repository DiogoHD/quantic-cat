import wavesData from "../data/waves.json"
import type { Phase } from "../types/position";

export function PhaseBar({ currentPhase }: { currentPhase: Phase }) {
  return (
    <div className="flex flex-col gap-2 w-full select-none p-8">
      {/* Upper Labels */}
      <div className="relative h-4">
        {wavesData.map((_, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: `${(i / (wavesData.length)) * 100}%`, transform: "translateX(-50%)" }}
          >
            <span 
              className={`text-xs ${i * 45 === currentPhase ? "font-bold" : "text-gray-300"}`}
              style={{ color: i * 45 === currentPhase ? wavesData[i].hex : undefined }}
            >
              {i === 0 ? "0" : i === 2 ? "π/2" : i === 1 ? "π/4" : i === 4 ? "π" : i === 6 ? "3π/2" : `${i}π/4`}
            </span>
          </div>
        ))}
        <div
          key={wavesData.length}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: `100%`, transform: "translateX(-100%)" }}
        >
          <span className="text-xs text-gray-300">2π</span>
        </div>
      </div>

      {/* Fixed color segments */}
      <div className="flex h-6 rounded-full overflow-hidden">
        {wavesData.map((wave, i) => (
          <div
            key={i}
            className="flex-1"
            style={{ backgroundColor: wave.hex }}
          />
        ))}
      </div>

      {/* Lower Labels */}
      <div className="relative h-4">
        {wavesData.map((_, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: `${(i / (wavesData.length)) * 100}%`, transform: "translateX(-50%)" }}
          >
            <span 
              className={`text-xs ${i * 45 === currentPhase ? "font-bold" : "text-gray-300"}`}
              style={{ color: i * 45 === currentPhase ? wavesData[i].hex : undefined }}
            >
              {i * 45}°
            </span>
          </div>
        ))}
        <div
          key={wavesData.length}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: `100%`, transform: "translateX(-100%)" }}
        >
          <span className="text-xs text-gray-300">360°</span>
        </div>
      </div>
    </div>
  );
}