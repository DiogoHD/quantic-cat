export interface LevelProps {
  current: number;
  setCurrent: (current: number) => void;
  code: string;
  setCode: (code: string) => void;
  hasWon: boolean;
}