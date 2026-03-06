function sum(a: number, b: number) {
  return a + b;
}

export default function Subtitle() {
  return (
    <h2
      style={{
        color: "#e3e3e3",
      }}
    >
      It's easy, like 1 + 1 = {sum(1, 1)}
    </h2>
  );
}
