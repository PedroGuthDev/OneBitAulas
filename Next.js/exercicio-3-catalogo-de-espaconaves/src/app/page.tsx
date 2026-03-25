import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Conheça as naves do universo Star Wars</h1>
      <Link href="/espaconaves" className="linkButton" style={{maxWidth: "15rem"}}>
        Ver todas
      </Link>
    </main>
  );
}
