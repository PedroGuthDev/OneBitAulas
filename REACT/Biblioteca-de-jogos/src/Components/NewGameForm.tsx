import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({
  addGame,
}: {
  addGame: (game: { title: string; coverImage: string }) => void;
}) {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = (ev: React.SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addGame({ title, coverImage });
    setTitle("");
    setCoverImage("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <TextInput label="Título" value={title} setValue={setTitle} />
      <TextInput label="Capa" value={coverImage} setValue={setCoverImage} />
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  );
}
