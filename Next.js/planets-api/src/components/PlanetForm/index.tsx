"use client";

import styles from "./style.module.css";
import { createPlanetAction } from "@/actions/planets-actions";
import { useActionState } from "react";

export function PlanetForm() {
  const [state, formAction, isPending] = useActionState(createPlanetAction, {
    message: "",
  });

  return (
    <form className={styles.planetForm} action={formAction}>
      <p>{state?.message}</p>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" required />
      </div>

      <div>
        <label htmlFor="description">Descrição</label>
        <textarea name="description" id="description" required></textarea>
      </div>

      <div>
        <label htmlFor="imageUrl">Imagem (URL)</label>
        <input type="text" name="imageUrl" id="imageUrl" required />
      </div>

      <div>
        <button type="submit" disabled={isPending}>
          {isPending ? "Adicionando..." : "Adicionar Planeta"}
        </button>
      </div>
    </form>
  );
}
