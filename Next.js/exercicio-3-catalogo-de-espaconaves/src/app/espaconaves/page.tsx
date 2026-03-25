import Link from "next/link";
import styles from "./page.module.css";
import spaceships from "@/spaceships.json";

export default async function Espaconaves({
  searchParams,
}: {
  searchParams: Promise<{ categoria: string }>;
}) {
  const categoria = (await searchParams).categoria;
  const filteredSpaceships = spaceships.filter(
    (spaceship) => spaceship.category === categoria,
  );
  return (
    <>
      {categoria ? (
        <main>
          <h1>Espaçonaves da categoria {categoria}</h1>
          <div className={styles.container}>
            {filteredSpaceships.map((spaceship) => (
              <Link
                href={`/espaconaves/${spaceship.id}`}
                key={spaceship.id}
                className="linkButton"
              >
                {spaceship.name}
              </Link>
            ))}
          </div>
        </main>
      ) : (
        <main>
          <h1>Todas as espaçonaves</h1>
          <div className={styles.container}>
            {spaceships.map((spaceship) => (
              <Link
                href={`/espaconaves/${spaceship.id}`}
                key={spaceship.id}
                className="linkButton"
              >
                {spaceship.name}
              </Link>
            ))}
          </div>
        </main>
      )}
    </>
  );
}
