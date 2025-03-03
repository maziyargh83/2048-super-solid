import { nanoid } from "nanoid";
import { TBlock } from "../types/Block";
import getSequenceNumber from "./sequenceNumber";
const createBlock = () => {
  const sequence = getSequenceNumber();

  return () => ({
    createBlock: (x: number, y: number): TBlock => {
      const value = sequence.deployPreview();
      console.log({ x, y, value });

      return {
        id: nanoid(),
        x,
        y,
        value,
      } satisfies TBlock;
    },
  });
};
export default createBlock();
