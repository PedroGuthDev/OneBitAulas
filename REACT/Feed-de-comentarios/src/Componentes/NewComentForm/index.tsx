import { useState } from "react";
import styles from "./index.module.css";

export default function NewComentForm({
  addComentario,
}: {
  addComentario: (comentario: { email: string; coment: string }) => void;
}) {
  const [email, setEmail] = useState("");
  const [coment, setComent] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    addComentario({ email, coment });
    setEmail("");
    setComent("");
  }

  return (
    <form action="" onSubmit={handleSubmit} className={styles.comentForm}>
      <div className={styles.formItem}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="coment">Comentário</label>
        <textarea
          name="coment"
          id="coment"
          value={coment}
          onChange={(e) => setComent(e.target.value)}
          required
          cols={30}
          rows={6}
        ></textarea>
      </div>
      <button type="submit">Enviar comentário</button>
    </form>
  );
}
