import styles from "./description.module.css";

export default function Description({ description }: { description: string }) {
  return (
    <>
      <div className={styles.borderDiv}>
        <p>{description}</p>
      </div>
    </>
  );
}
