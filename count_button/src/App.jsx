import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); //useState o'zida 0ni saqlab turibti, button bosilganda esa component change bovotti
  return (
    <>
      <h1 bg-color="blue">Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default App;
