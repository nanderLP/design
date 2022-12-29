import styles from "./Dock.module.scss";

import { CSSProperties, FC } from "react";
import Pen from "../components/dock/Pen";

const Item: FC = () => {
  return (
    <div className={styles.item}>
      <Pen
        style={
          {
            "--pen-base": "var(--dark-16)",
            "--pen-accent": "red",
          } as CSSProperties
        }
      />
    </div>
  );
};

const Dock: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.dockWrapper}>
        <div className={styles.dock}>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </main>
  );
};

export default Dock;
