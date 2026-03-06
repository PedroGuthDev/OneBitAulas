import { useState } from "react";

export default function useGameCollection() {
  const [games, setGames] = useState<
    { id: number; title: string; coverImage: string }[]
  >(() => {
    const savedGames = localStorage.getItem("games");
    if (savedGames) {
      try {
        const parsed = JSON.parse(savedGames);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const addGame = ({
    title,
    coverImage,
  }: {
    title: string;
    coverImage: string;
  }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, coverImage };

    setGames((prevGames) => {
      const newState = [...prevGames, game];
      localStorage.setItem("games", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id: number) => {
    setGames((prevGames) => {
      const newState = prevGames.filter((game) => game.id !== id);
      localStorage.setItem("games", JSON.stringify(newState));
      return newState;
    });
  };

  return { games, addGame, removeGame };
}
