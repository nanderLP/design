import styles from "./Animation.module.scss";

import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import Preview from "../components/animation/Preview";
import { atom, useSetAtom } from "jotai";

const colorAtom = atom("green");

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];

const Animation: FC = () => {
  const setColor = useSetAtom(colorAtom);

  return (
    <main className={styles.container}>
      <div className={styles.preview}>
        <Canvas>
          <Preview />
        </Canvas>
      </div>
      <div className={styles.menu}>
        {colors.map((color) => (
          <button
            className={styles.colorButton}
            key={color}
            onClick={() => setColor(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </main>
  );
};

export { colorAtom };

export default Animation;
