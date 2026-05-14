import type { Position } from "./position";

export interface CellProps {
  index: number;
  children?: React.ReactNode;
}

export interface MapProps {
  rows: number;
  cols: number;
  catPosition: Position;
  fishPosition: Position;
}