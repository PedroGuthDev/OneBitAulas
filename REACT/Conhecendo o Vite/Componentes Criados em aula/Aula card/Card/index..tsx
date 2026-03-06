import styles from "./Card.module.scss";
import Button from "../Button";

export default function Card({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.cardImg} />
      <div className={styles.textCard}>
        <h1 style={{ marginTop: "0" }}>{title}</h1>
        <p>
          Uma aventura épica de ficção científica que mudou o cinema para
          sempre. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          dignissimos iusto. Dicta dolorum atque placeat numquam.
        </p>
        <Button />
      </div>
    </div>
  );
}
