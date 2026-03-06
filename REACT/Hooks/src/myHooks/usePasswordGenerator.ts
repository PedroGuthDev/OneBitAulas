import { useState } from "react";

export default function generatePassword() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);
  const generate = (passwordSizeCustom: number = 12) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+\-=\[\]{};':\",./<>?~";
    let password = "";
    for (let i = 0; i < passwordSizeCustom; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(password);
    setCopyText("Copiar");
  };
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopyText((prevCopy) => (prevCopy = "Copiado"));
  };
  return {
    password,
    generate,
    copyText,
    copyPassword,
    passwordSize,
    setPasswordSize,
  };
}
