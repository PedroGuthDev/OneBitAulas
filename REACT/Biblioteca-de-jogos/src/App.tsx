import Game from "./Components/Game";
import NewGameForm from "./Components/NewGameForm";
import useGameCollection from "./Hooks/useGameColletction";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div>
      <h1>Biblioteca de jogos</h1>
      <NewGameForm addGame={addGame} />

      <div className="games">
        {games.length === 0 && <p>Nenhum jogo cadastrado</p>}
        {games.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            title={game.title}
            coverImage={game.coverImage}
            removeGame={() => removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  );
}
