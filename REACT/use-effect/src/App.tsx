import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Componente montado");

    return () => {
      console.log("Componente desmontado");
    };
  }, [counter]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Conhecendo o useEffect</h1>
      <input type="checkbox" checked={show} onChange={() => setShow(!show)} />
      <hr />
      {show && <Counter />}
    </div>
  );
}
