import styles from "./page.module.css";
import { PlanetItem } from "@/components/PlanetItem";
import { PlanetForm } from "@/components/PlanetForm";
import { getPlanets } from "@/models/Planet";
import { Suspense } from "react";

export default async function Home() {
  const planets = await getPlanets();

  return (
    <div className={styles.page}>
      <h1>Planetas</h1>
      <div className={styles.container}>
        <Suspense fallback={<div>Carregando formulário...</div>}>
          <PlanetForm />
        </Suspense>

        <section className={styles.planets}>
          {planets.map((planet) => (
            <PlanetItem key={planet.id} planet={planet} />
          ))}
        </section>
      </div>
    </div>
  );
}
