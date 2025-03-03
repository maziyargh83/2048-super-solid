import { createEffect, For } from "solid-js";
import use2048 from "../core/create2048";
import { Block } from "./Block";
import { setAttrBoard } from "../utils/handleAttr";
interface CellProps {
  index: number;
}
export const Cell = (props: CellProps) => {
  const { useCell } = use2048.cell(props.index);

  return (
    <div class="cell" {...setAttrBoard(props.index)}>
      <For each={Object.values(useCell)}>
        {(block, i) => (
          <Block
            x={props.index}
            y={props.index}
            value={block.value}
            id={block.id}
          />
        )}
      </For>
    </div>
  );
};
