import { createEffect, For } from "solid-js";
import getSequenceNumber from "../core/sequenceNumber";
import { Block } from "./Block";
import { nanoid } from "nanoid";

export const Preview = () => {
  const sequence = getSequenceNumber();
  createEffect(() => {
    console.log(sequence.preview());
  });
  return (
    <div class="preview">
      <For each={sequence.preview()}>
        {(item) => <Block x={0} y={0} value={item} id={nanoid()} />}
      </For>
    </div>
  );
};
