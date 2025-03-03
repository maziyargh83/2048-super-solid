import { TBlock } from "../types/Block";
import use2048 from "../core/create2048";
import { generateColor } from "../utils/color";

interface BlockProps extends TBlock {
  className?: string;
}
export const Block = (props: BlockProps) => {
  const { useBlock } = use2048.block(props.x, props.y);

  return (
    <div
      class="block"
      classList={{
        [props.className]: !!props.className,
      }}
      style={{ "--block-color": generateColor(props.value) }}
    >
      {props.value}
    </div>
  );
};
