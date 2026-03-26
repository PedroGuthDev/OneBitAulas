"use server";

import { revalidatePath } from "next/cache";
import { createPlanet, deletePlanet } from "@/models/Planet";

export async function createPlanetAction(
  previousState: any,
  formData: FormData,
) {
  const name = formData.get("name");
  const description = formData.get("description");
  const image = formData.get("imageUrl");

  if (
    typeof name !== "string" ||
    typeof description !== "string" ||
    typeof image !== "string"
  ) {
    return { message: "Valores inválidos" };
  }

  await createPlanet({ name, description, image });

  revalidatePath("/");
}

export async function deletePlanetAction(id: number) {
  await deletePlanet(id);

  revalidatePath("/");
}
