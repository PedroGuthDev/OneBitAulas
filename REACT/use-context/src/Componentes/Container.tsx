export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Container do App</h1>
      {children}
    </div>
  );
}
