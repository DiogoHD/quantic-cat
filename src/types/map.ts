import type { Position, PositionPhase } from "./position";

export interface CellProps {
  index: number;
  children?: React.ReactNode;
}

export interface MapProps {
  cols: number;
  cats: PositionPhase[];
  boxPositions: Position[];
  fishPositions?: Position[];
  fishesCaught?: boolean[];
  waves?: PositionPhase[];
  hasWon: boolean;
}