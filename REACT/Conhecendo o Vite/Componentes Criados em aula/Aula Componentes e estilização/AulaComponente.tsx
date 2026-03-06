import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";
import StatusText from "../../vite-react/src/Components/StatusText";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
