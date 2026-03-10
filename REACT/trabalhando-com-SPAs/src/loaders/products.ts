import type { LoaderFunctionArgs } from "react-router-dom";
import products from "../database.json";

export default function loadProduct({ params }: LoaderFunctionArgs) {
  const product = products.find((product) => product.id === Number(params.id));
  if (!product) {
    throw new Response("Produto não encontrado", {
      status: 404,
    });
  }
  return product;
}
