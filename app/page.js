import { Container } from "@/components/Container";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container className={styles.containerHome}></Container>
    </main>
  );
}
