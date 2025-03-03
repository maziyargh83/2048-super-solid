import { rowIdAttr } from "../config";

export const getAttrBoard = (element: HTMLDivElement) => {
  if (!element) return null;
  return element.getAttribute(rowIdAttr);
};
export const setAttrBoard = (id: number) => {
  return {
    [rowIdAttr]: id,
  };
};

export const getTargetCell = (target: HTMLDivElement) => {
  const rowId = getAttrBoard(target);
  return rowId;
};

export const getTargetCellId = (event: PointerEvent) => {
  const element = document.elementFromPoint(event.x, event.y);
  const targetRow = getTargetCell(element as HTMLDivElement);
  return targetRow;
};
