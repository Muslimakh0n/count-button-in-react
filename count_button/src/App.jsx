import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); //useState o'zida 0ni saqlab turibti, button bosilganda esa component change bovotti
  let colour;
  if (count == 0) {
    colour = "yellow";
  } else if (count > 0) {
    colour = "green";
  } else {
    colour = "purple";
  }
  const styles = {
    color: colour,
  };
  return (
    <>
      <div className=" mx-auto flex h-screen w-screen items-center justify-center bg-[#252425]">
        <div className="w-[500px] bg-[#252425] p-4">
          {/* // o'zing biror tailwindda yoq qiymatni bermoqchi bolsang arrayning
          //ichida yozasan! */}
          <h1 className=" text-center text-4xl text-white" style={styles}>
            Count : {count}
          </h1>
          <div className="mt-4 text-center text-white">
            <button
              className=" text      ml-3 rounded border border-transparent bg-black px-4 py-1  text-2xl shadow hover:border"
              onClick={() => setCount(count - 1)}
            >
              -1
            </button>
            <button
              className="ml-3 rounded border border-transparent bg-black px-4 py-1 text-2xl text-white shadow hover:border"
              onClick={() => setCount(count + 1)}
            >
              +1
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
