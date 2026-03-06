import styles from "./button.module.css";

export default function Button({ text, url }: { text: string; url: string }) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className={styles.btn}>{text}</button>
      </a>
    </>
  );
}
