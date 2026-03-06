import styles from "./index.module.css";

export default function Coment({
  comentario,
}: {
  comentario: { email: string; coment: string; date: Date; id: number };
}) {
  return (
    <div key={comentario.id} className={styles.coment}>
      <h3>{comentario.email}</h3>
      <p style={{ fontSize: "0.8rem" }}>
        Publicado em: {comentario.date.toLocaleDateString()} -{" "}
        {comentario.date.toLocaleTimeString()}
      </p>
      <p>{comentario.coment}</p>
    </div>
  );
}
