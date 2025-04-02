import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black"); // ✅ Default color

  return (
    <div
      className="w-full h-screen fixed top-0 left-0"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-2 
        rounded-3xl">
          <button onClick={() => setColor("red")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}>
            Red</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
