import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./myHooks/usePasswordGenerator";

function App() {
  const {
    password,
    generate,
    copyText,
    copyPassword,
    passwordSize,
    setPasswordSize,
  } = usePasswordGenerator();
  const [showInput, setShowInput] = useState(false);
  const passwordSizeDefault = showInput ? passwordSize : 12;
  return (
    <>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar</label>
        <input
          type="checkbox"
          id="showInput"
          checked={showInput}
          onChange={() => setShowInput((prevShowInput) => !prevShowInput)}
        />
        {showInput && (
          <div>
            <label htmlFor="passwordSize">Tamanho</label>
            <input
              type="number"
              id="passwordSize"
              min={1}
              value={passwordSize}
              onChange={(e) => setPasswordSize(Number(e.target.value))}
            />
          </div>
        )}
      </div>
      <div className="card">
        <button onClick={() => generate(passwordSizeDefault)}>
          Gerar senha de {passwordSizeDefault} caracteres
        </button>
        <button onClick={() => copyPassword()}>{copyText}</button>
        <h2>{password}</h2>
      </div>
    </>
  );
}

export default App;
