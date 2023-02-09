import React from "react";
import styles from './CatchPhrase.module.css';

export function CatchPhrase () {
  return (

    <div className={styles["catchphrase-cont"]}>
      <div className={styles["catchphrase"]}></div>
      <span className={styles["catchphrase_phrase"]}>Chez vous, partout et ailleurs</span>
    </div>
  )
}