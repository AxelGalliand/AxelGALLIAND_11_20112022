import React from "react";
import styles from "./Tag.module.css"

export function Tag(props) {
  <div className={styles["logement_tag"]}>
            { props.tags.map(tagText => <span className={styles["tag"]}>{tagText}</span>)}
            {console.log(props.tags)}
          </div>
}