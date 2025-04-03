import { useCallback, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~!@#$%^&*";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);  // ✅ Dependency array fix

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);  // ✅ passwordGenerator ko dependency me dala

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="w-full max-w-md shadow-md rounded-lg px-6 py-4 text-gray-300 bg-gray-800">
        <h1 className="text-white text-center text-2xl font-semibold mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden bg-gray-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-transparent text-white"
            placeholder="Generated Password"
            readOnly
          />

          <button className="outline-none bg-blue-500 text-white px-3 py-2 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-x-2">
            <input 
              type="range"
              min={8}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>{length}</label>  
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={characterAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
