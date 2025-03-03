import { TBlock } from "../types/Block";
import use2048 from "../core/create2048";

interface BlockProps extends TBlock {}
export const Block = (props: BlockProps) => {
  const { useBlock } = use2048.block(props.x, props.y);
  return <div class="block" />;
};
