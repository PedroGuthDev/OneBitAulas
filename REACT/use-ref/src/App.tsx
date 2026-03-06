import { useRef, useState } from "react";
import RefExample from "./RefExample";

export default function App() {
  let variavel = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showVallues = () => {
    alert(`Variavel: ${variavel}\nState: ${state}\nRef: ${ref.current}`);
  };
  return (
    <div>
      <h1>App</h1>
      <RefExample />
      <hr />
      <p>Variavel: {variavel}</p>
      <p>State: {state}</p>
      <p>Ref: {ref.current}</p>
      <button onClick={() => variavel++}>Variavel++</button>
      <button onClick={() => setState(state + 1)}>State++</button>
      <button onClick={() => ref.current++}>Ref++</button>
      <button onClick={showVallues}>Mostrar valores</button>
    </div>
  );
}
