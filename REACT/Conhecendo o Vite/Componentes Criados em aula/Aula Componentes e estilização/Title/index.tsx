// Componentes precisam ter a primeira letra maiúscula.
export default function Title() {
  const tech: string = "Typescript";
  return (
    <h1
      style={{
        color: "#e5e5e5",
      }}
    >
      {tech} is awesome!
    </h1>
  );
}
