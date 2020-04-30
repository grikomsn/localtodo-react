import * as React from "react";

import styles from "./App.module.scss";
import { Footer, Header, Todos } from "./components";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}
