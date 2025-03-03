import { For, type ParentProps } from "solid-js";
import { Cell } from "./Cell";
import use2048 from "../core/create2048";
import trackPointer from "../core/trackPointer";

export const Board = (props: ParentProps) => {
  const { initialCols, store, addBlock } = use2048.board();

  return (
    <div
      class={"board"}
      use:trackPointer={{
        handleAddItem: addBlock,
        handlePointerMove: (e) => {
          console.log(e);
        },
      }}
    >
      <For each={Array.from({ length: initialCols })}>
        {(_, i) => <Cell index={i()} />}
      </For>
    </div>
  );
};
