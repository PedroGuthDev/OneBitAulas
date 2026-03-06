import Container from "./Componentes/Container";
import Header from "./Componentes/Header";
import UserInfo from "./Componentes/UserInfo";
import { UserContext } from "./Contexts/UserContext";

export default function App() {
  const user: { name: string; email: string } = {
    name: "Pedro",
    email: "pedro@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <Header>
        <h1>Cabeçalho</h1>
      </Header>
      <Container>
        <UserInfo />
      </Container>
    </UserContext.Provider>
  );
}
