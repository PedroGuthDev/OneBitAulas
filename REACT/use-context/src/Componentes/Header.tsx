import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function Header({ children }: { children: React.ReactNode }) {
  const user = useContext(UserContext);

  return (
    <div>
      <p>{user?.name}</p>
      {children}
    </div>
  );
}
