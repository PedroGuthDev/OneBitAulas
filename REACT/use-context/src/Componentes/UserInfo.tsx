import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function UserInfo() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Informações do usuário</h1>
      <p>Nome: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}
