import type { Component } from "solid-js";
import { Board } from "./components/Board";
import { config } from "./config";
const App: Component = () => {
  return (
    <>
      <div
        class="container"
        style={{
          "--width": config.sizing.width,
          "--height": config.sizing.height,
        }}
      >
        <Board />
      </div>
    </>
  );
};

export default App;
