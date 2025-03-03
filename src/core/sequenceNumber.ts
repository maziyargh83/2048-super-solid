import { createSignal } from "solid-js";
import { sequenceConfig } from "../config";
import { getInitialTileNumber, getRandomIndex } from "../utils/random";

const getSequenceNumber = () => {
  const sequence: number[] = getInitialTileNumber(
    sequenceConfig.size,
    sequenceConfig.start
  );
  const [preview, setPreview] = createSignal([
    2,
    sequence[getRandomIndex(sequence)],
  ]);

  return () => {
    return {
      getSequence: () => structuredClone(sequence),
      size: sequence.length,
      preview,
      getPreview: () => {
        const [first, ...rest] = preview();

        return first;
      },
      deployPreview: () => {
        const [first, ...rest] = preview();

        setPreview([...rest, sequence[getRandomIndex(sequence)]]);
        return first;
      },
    };
  };
};

export default getSequenceNumber();
