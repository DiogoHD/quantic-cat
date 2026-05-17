import { Waves } from "lucide-react";
import type { Phases } from "../types/phase";
import wavesData from '../data/waves.json';

export function Wave({ phase }: { phase: Phases }) {
    const index = (phase / 45) % wavesData.length;
    const wave = wavesData[index];

  return (
    <div className="w-full h-full">
      <Waves className="w-full h-full" style={{ color: wave.hex }} />
    </div>
  );
}