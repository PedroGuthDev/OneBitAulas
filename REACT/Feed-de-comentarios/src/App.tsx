import { useState } from "react";
import NewComentForm from "./Componentes/NewComentForm";
import Coment from "./Componentes/Coment";
import styles from "./App.module.css";

export default function App() {
  const [comentarios, setComentarios] = useState<
    { email: string; coment: string; date: Date; id: number }[]
  >([]);

  function addComentario(comentario: { email: string; coment: string }) {
    const novoComentario = { ...comentario, date: new Date(), id: Date.now() };
    setComentarios((comentariosAnteriores) => [
      ...comentariosAnteriores,
      novoComentario,
    ]);
  }

  return (
    <div className={styles.container}>
      <h2>Seção de Comentários</h2>
      <NewComentForm addComentario={addComentario} />
      <div>{comentarios.length === 0 && <p>Nenhum comentário</p>}</div>
      {comentarios
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((comentario) => (
          <Coment key={comentario.id} comentario={comentario} />
        ))}
    </div>
  );
}
