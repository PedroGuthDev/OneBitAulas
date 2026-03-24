"use client";

import { ReactNode, useEffect, useState } from "react";
import styles from "./layout.module.css";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Render");
  }, []);

  return (
    <div className={styles.blogLayout}>
      <aside>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter((current) => current + 1)}>
          Incrementar
        </button>
        <div>
          <h2>Categorias</h2>
          <ul className="cards">
            <li className="card">
              <Link href="/blog/categorias/planetas">Planetas</Link>
            </li>
            <li className="card">
              <Link href="/blog/categorias/estrelas">Estrelas</Link>
            </li>
            <li className="card">
              <Link href="/blog/categorias/galaxias">Galáxias</Link>
            </li>
            <li className="card">
              <Link href="/blog/categorias/cosmologia">Cosmologia</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Galerias</h2>
          <div>
            <p>Explore imagens incríveis do universo.</p>
            <ul className="cards">
              <li className="card">
                <Link href="/blog/posts/estrela-distante">
                  Imagem de uma Estrela Distante
                </Link>
              </li>
              <li className="card">
                <Link href="/blog/posts/nebulosa-em-explosao">
                  Nebulosa em Explosão
                </Link>
              </li>
              <li className="card">
                <Link href="/blog/posts/galaxia-de-andromeda">
                  A Grande Galáxia de Andrômeda
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div>{children}</div>
    </div>
  );
}
