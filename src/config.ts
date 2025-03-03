export const config = {
  cols: 6,
  rows: 6,
  sizing: {
    width: "400px",
    height: "400px",
    x: 400,
    y: 400,
  },
  colsGap: 10,
  maxNumber: 2048,
} as const;

export const sequenceConfig = {
  start: 2,
  size: 6,
} as const;

export const rowIdAttr = "rowid";
export const cellWidth = `${config.sizing.x / config.rows - config.colsGap}px`;
export const cellHeight = `${config.sizing.y / config.cols - config.colsGap}px`;
