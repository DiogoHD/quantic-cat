import wavesData from "../data/waves.json"

export function PhaseBar() {
  return (
    <div className="flex flex-col gap-2 w-full select-none p-8">
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

      {/* Labels */}
      <div className="relative h-4">
        {wavesData.map((_, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: `${(i / (wavesData.length)) * 100}%`, transform: "translateX(-50%)" }}
          >
            <span className="text-xs text-gray-300">{i * 45}°</span>
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