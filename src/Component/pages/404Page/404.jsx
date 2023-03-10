import React from "react";
import styles from "./404.module.css";


export default function Error(){
return(
  <div className={styles["error"]}>
    <h1 className={styles["error_h1"]}>404</h1>
    <span className={styles["error_span"]}>Oups ! La page que vous demandez n'existe pas.</span>
    <span className={styles["error_backLink"]}>Retourner sur la page d'accueil</span>
  </div>
)

}