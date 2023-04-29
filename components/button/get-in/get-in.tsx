import React, { MouseEventHandler } from "react";
import styles from "./get-in.module.css";
interface Props {
  msg: string;
  toPosts: MouseEventHandler<HTMLButtonElement>;
}
const GetIn = ({ msg, toPosts }: Props) => {
  return (
    <button
      className={`${styles.buttonSky} dark:bg-neutral-800 dark:hover:bg-stone-500`}
      onClick={toPosts}
    >
      <div>{msg}</div>
      <div className={styles.spotWrapper}>
        <span
          className={`${styles.outterSpot} animate-ping dark:bg-sky-400`}
        ></span>
        <span className={`${styles.innerSpot} dark:bg-sky-500`}></span>
      </div>
    </button>
  );
};

export default GetIn;
