import type { Position } from "./position";

export interface CellProps {
  index: number;
  children?: React.ReactNode;
}

export interface MapProps {
  cols: number;
  catPositions: Position[];
  boxPositions: Position[];
  fishPositions?: Position[];
  fishesCaught?: boolean[];
  hasWon: boolean;
}