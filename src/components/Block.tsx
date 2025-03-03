import { TBlock } from "../types/Block";
import use2048 from "../core/create2048";
import { createEffect } from "solid-js";
import { generateColor } from "../utils/color";

interface BlockProps extends TBlock {}
export const Block = (props: BlockProps) => {
  const { useBlock } = use2048.block(props.x, props.y);

  return (
    <div class="block" style={{ "--block-color": generateColor(props.value) }}>
      {props.value}
    </div>
  );
};
