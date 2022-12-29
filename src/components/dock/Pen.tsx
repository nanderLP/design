import styles from "./Pen.module.scss";

import { FC } from "react";

/**
 * requires two css variables for the base and accent colors:
 * - `--pen-base`
 * - `--pen-accent`
 */
const Pen: FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 50 200"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      className={styles.svg}
      {...props}
    >
      <rect className={styles.body} y="41" width="50" height="159" />
      <rect className={styles.accent} y="31" width="50" height="10" />
      <path
        className={styles.nib}
        d="M22.563 2.19856C23.7789 0.602657 26.1884 0.627008 27.3719 2.24715L32.6696 9.5H17L22.563 2.19856Z"
      />
      <path className={styles.lowerNib} d="M17 9.5H32.6629L50 31H0L17 9.5Z" />
    </svg>
  );
};

export default Pen;
