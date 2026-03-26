"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>Erro ao carregar planetas</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}
