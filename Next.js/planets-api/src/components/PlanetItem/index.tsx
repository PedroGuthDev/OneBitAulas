"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { deletePlanetAction } from "@/actions/planets-actions";
import { Planet } from "@/models/Planet";

export interface PlanetItemsProps {
  planet: Planet;
}

export function PlanetItem({ planet }: PlanetItemsProps) {
  return (
    <div className={styles.planet}>
      <h2>{planet.name}</h2>
      <Image
        src={planet.image}
        alt={planet.name}
        width={320}
        height={180}
        style={{ objectFit: "cover" }}
      />
      <p>{planet.description}</p>
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => deletePlanetAction(planet.id)}
      >
        Excluir
      </button>
    </div>
  );
}
