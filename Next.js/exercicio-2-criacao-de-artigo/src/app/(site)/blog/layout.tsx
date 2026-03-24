export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <aside>
      <h2>Layout do blog</h2>
      {children}
    </aside>
  );
}
