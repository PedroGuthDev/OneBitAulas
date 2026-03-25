import Link from "next/link";
import styles from "./page.module.css";
import spaceships from "@/spaceships.json";

const categorias = [
  ...new Set(spaceships.map((spaceship) => spaceship.category)),
];

export default function Categorias() {
  return (
    <main>
      <h1>Categorias</h1>
      <div className={styles.container}>
        {categorias.map((categoria) => (
          <Link
            href={`/espaconaves?categoria=${categoria}`}
            key={categoria}
            className="linkButton"
          >
            {categoria}
          </Link>
        ))}
      </div>
    </main>
  );
}
