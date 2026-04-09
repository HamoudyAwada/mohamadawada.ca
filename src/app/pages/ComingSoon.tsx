import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "./ComingSoon.module.css";

interface ComingSoonProps {
  pageName: string;
}

export default function ComingSoon({ pageName }: ComingSoonProps) {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>{pageName}</h1>
          <p className={styles.message}>This page is currently under construction.</p>
          <Link to="/" className={styles.link}>
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}