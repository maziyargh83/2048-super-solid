import { For } from "solid-js";
import use2048 from "../core/create2048";
import { Block } from "./Block";
interface CellProps {
  index: number;
}
export const Cell = (props: CellProps) => {
  const { data } = use2048.cell(props.index);

  return (
    <div class="cell">
      <For each={Object.values(data)}>
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
