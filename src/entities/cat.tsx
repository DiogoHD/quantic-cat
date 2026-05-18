import catsData from '../data/cats.json';
import type { Phase } from "../types/position";

export function Cat({ phase, eating }: { phase: Phase; eating: boolean }) {
  const index = (phase / 45) % catsData.length;
  const cat = catsData[index];
  
  return (
    <img 
      src={eating ? cat.eatingSrc : cat.catSrc} 
      alt={`${cat.color} cat`} 
      className="w-full h-full" 
    />
  );
}
