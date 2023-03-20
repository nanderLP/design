import styles from "./FileManager.module.scss";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { FC } from "react";
import Interface from "../components/filemanager/Interface";
import { Navigation } from "../components/filemanager/Navigation";

const FileManager: FC = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <Navigation />
        <div className={styles.content}>
          <Interface />
        </div>
      </main>
    </div>
  );
};

export default FileManager;
