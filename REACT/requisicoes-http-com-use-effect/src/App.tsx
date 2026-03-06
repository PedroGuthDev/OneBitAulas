import { useEffect, useState } from "react";

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data: { results: { name: string; url: string }[] } =
    await response.json();
  return data.results;
}

export default function App() {
  const [pokemon, setPokemon] = useState<{ name: string; url: string }[]>([]);
  useEffect(() => {
    fetchPokemon().then((results) => setPokemon(results));
  }, []);

  return (
    <div>
      <h1>App</h1>
      <ul>
        {pokemon.map((pokemon) => (
          <div key={pokemon.name}>
            <li>{pokemon.name}</li>
            <button
              onClick={() =>
                window.open(pokemon.url, "_blank.noopener.noreferrer")
              }
            >
              Ver detalhes
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
