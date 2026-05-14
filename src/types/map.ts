import type { Position } from "./position";

export interface CellProps {
  index: number;
  children?: React.ReactNode;
}

export interface MapProps {
  cols: number;
  catPosition: Position;
  fishPosition: Position;
  hasWon: boolean;
}