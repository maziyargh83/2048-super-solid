import { onCleanup } from "solid-js";
import { getTargetCellId } from "../utils/handleAttr";
interface TrackPointerProps {
  handlePointerMove: (e: PointerEvent) => void;
  handleAddItem: (index: number) => void;
}
type getTrackPointerProps = () => TrackPointerProps;
declare module "solid-js" {
  namespace JSX {
    interface Directives {
      trackPointer: TrackPointerProps;
    }
  }
}
const createTrackPointer = () => {
  return (el: HTMLElement, props: getTrackPointerProps) => {
    const { handlePointerMove, handleAddItem } = props();

    const addPointerMoveListener = (e: PointerEvent) => {
      el.setPointerCapture(e.pointerId);
      el.addEventListener("pointermove", handlePointerMove);
    };

    const removePointerMoveListener = (e?: PointerEvent) => {
      if (e) {
        el.releasePointerCapture(e.pointerId);
        handleAddItem(Number.parseInt(getTargetCellId(e)));
      }
      el.removeEventListener("pointermove", handlePointerMove);
    };
    const element = el;
    if (!element) return;

    element.style.touchAction = "none"; // Disable touch actions to ensure proper pointer event handling
    element.addEventListener("pointerdown", addPointerMoveListener);
    element.addEventListener("pointerup", removePointerMoveListener);
    // element.addEventListener("pointerleave", handlePointerLeave);

    onCleanup(() => {
      element.removeEventListener("pointerdown", addPointerMoveListener);
      element.removeEventListener("pointerup", removePointerMoveListener);
      // element.removeEventListener("pointerleave", handlePointerLeave);
      removePointerMoveListener();
    });
  };
};
export { createTrackPointer };
export default createTrackPointer();
