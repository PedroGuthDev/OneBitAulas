import { useRef } from "react";

export default function RefExample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.border = "2px solid red";
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focar</button>
    </div>
  );
}
