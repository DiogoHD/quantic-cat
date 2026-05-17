import catsData from '../data/cats.json';

type CatType = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315;

export function Cat({ phase, eating }: { phase: CatType; eating: boolean }) {
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
