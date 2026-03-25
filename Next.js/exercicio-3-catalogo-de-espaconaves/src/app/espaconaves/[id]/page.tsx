"use client";

import { useParams } from "next/navigation";
import spaceships from "@/spaceships.json";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Espaconave() {
  const params = useParams();
  const spaceship = spaceships.find(
    (spaceship) => spaceship.id === Number(params.id),
  );
  return (
    <main>
      {spaceship ? (
        <div className={styles.container}>
          <h1>{spaceship.name}</h1>
          <p className={styles.imageContainer}>
            <Image
              src={spaceship.imageUrl}
              alt={spaceship.name}
              width={800}
              height={400}
              style={{ objectFit: "contain", height: "400px" }}
            />
          </p>

          <p>{spaceship.category}</p>
          <p>{spaceship.model}</p>
          <p>{spaceship.description}</p>
          <div className={styles.buttonsContainer}>
            <Link href="/espaconaves" className="linkButton">
              Voltar
            </Link>
            <div style={{ display: "flex", gap: "1rem" }}>
              {spaceship.id > 1 && (
                <Link
                  href={`/espaconaves/${spaceship.id - 1}`}
                  className="linkButton"
                >
                  Anterior
                </Link>
              )}
              <Link
                href={`/espaconaves/${spaceship.id === spaceships.length ? 1 : spaceship.id + 1}`}
                className="linkButton"
              >
                Próxima
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1>Espaçonave não encontrada</h1>
      )}
    </main>
  );
}
