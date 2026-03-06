import { useState } from "react";
async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data: { results: { name: string; url: string }[] } =
    await response.json();
  return data.results;
}

async function fetchPokemonData(url: string) {
  const response = await fetch(url);
  const data: Pokemon = await response.json();
  return data;
}

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }[];
};

export default function App() {
  const [pokemon, setPokemon] = useState<{ name: string; url: string }[]>([]);
  const [pokemonShown, setPokemonShown] = useState<Pokemon | null>(null);
  // Ao invés de um useEffect, usamos um if para buscar os dados
  if (pokemon.length === 0) {
    fetchPokemon().then((results) => setPokemon(results));
  }

  return (
    <div id="app" style={{ display: "flex", gap: "1rem" }}>
      <div>
        <h1>Pokemons</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {pokemon.map((pokemon) => (
            <li key={pokemon.name} style={{ display: "flex", gap: "1rem" }}>
              <span style={{ textTransform: "capitalize", padding: "0.5rem" }}>
                {pokemon.name}
              </span>
              <button
                onClick={async () => {
                  setPokemonShown(await fetchPokemonData(pokemon.url));
                }}
              >
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>
      {pokemonShown && (
        <div>
          <h2>{pokemonShown.name}</h2>
          <img src={pokemonShown.sprites.front_default} alt="" />
          <div className="stat">
            <b>Tipo: </b>
            {pokemonShown.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>
            {pokemonShown.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>
            {pokemonShown.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {pokemonShown.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
