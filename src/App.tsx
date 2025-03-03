import type { Component } from "solid-js";
import { Board } from "./components/Board";
import { cellHeight, cellWidth, config } from "./config";
import { Preview } from "./components/Preview";
const App: Component = () => {
  return (
    <>
      <div
        class="container"
        style={{
          "--width": config.sizing.width,
          "--height": config.sizing.height,
          "--block-width": cellWidth,
          "--block-height": cellHeight,
        }}
      >
        <Board />
        <Preview />
      </div>
    </>
  );
};

export default App;
