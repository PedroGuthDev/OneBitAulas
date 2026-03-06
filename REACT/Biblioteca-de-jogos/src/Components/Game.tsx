export default function Game({
  id,
  title,
  coverImage,
  removeGame,
}: {
  id: number;
  title: string;
  coverImage: string;
  removeGame: (id: number) => void;
}) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => removeGame(id)}>Remover</button>
    </div>
  );
}