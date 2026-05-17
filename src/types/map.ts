import type { Position } from "./position";
import type { Phases } from "./phase";

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
  wavePositions?: Position[];
  wavePhases?: Phases[];
  hasWon: boolean;
}