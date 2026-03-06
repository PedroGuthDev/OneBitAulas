import styles from "./avatar.module.css";

export default function Avatar({
  src,
  name,
  children,
}: {
  src: string;
  name: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.avatar}>
        {children}
        <img src={src} alt="..." />
        <h1 className={styles.name}>{name}</h1>
      </div>
    </>
  );
}
