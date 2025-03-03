import { createStore, unwrap } from "solid-js/store";
import { config } from "../config";
import { TBlock } from "../types/Block";
import createBlock from "./createBlock";
type TStore = {
  [key: number]: {
    [key: number]: TBlock | undefined;
  };
};
const generateInitialStore = (initialCols: number): TStore => {
  const store = {} as TStore;

  for (let i = 0; i < initialCols; i++) {
    store[i] = {};
  }

  return store;
};
const create2048 = (initialCols: number) => {
  const [store, setStore] = createStore<TStore>(
    generateInitialStore(initialCols)
  );
  const blocks = createBlock();

  return {
    board: () => {
      return {
        store,
        initialCols,
        addBlock: (x: number) => {
          console.log({ x });

          const lastIndex = Object.keys(store[x]).length;
          const block = blocks.createBlock(x, lastIndex);
          setStore(x, lastIndex, block);
        },
      };
    },
    cell: (index: number) => {
      const [cell, setCell] = createStore(store[index]);

      return {
        useCell: cell,
        setCell: setCell,
      };
    },
    block: (x: number, y: number) => {
      const [block, setBlock] = createStore(store[x][y]);
      return {
        useBlock: block,
        setBlock,
      };
    },
  };
};
export { create2048 };
export default create2048(config.cols);
