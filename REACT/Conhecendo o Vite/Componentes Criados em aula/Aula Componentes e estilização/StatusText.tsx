export default function StatusText() {
  const status: boolean = true;
  return (
    <h2
      style={{
        color: status ? "#00ff00" : "#ff0000",
      }}
    >
      Current status: {status ? "Active" : "Inactive"}
    </h2>
  );
}
