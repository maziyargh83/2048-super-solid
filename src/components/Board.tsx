import { For, type ParentProps } from "solid-js";
import { Cell } from "./Cell";
import use2048 from "../core/create2048";
import { Block } from "./Block";
export const Board = (props: ParentProps) => {
  const { initialCols, data, store } = use2048.board();

  return (
    <div class={"board"}>
      <For each={Array.from({ length: initialCols })}>
        {(_, i) => <Cell index={i()} />}
      </For>
    </div>
  );
};
