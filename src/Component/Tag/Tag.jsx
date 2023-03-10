import React from "react";
import styles from "./Tag.module.css"

export function Tag(props) {
  <div className={styles["logement_tag"]}>
            {
              props.tags.map(tagText => <span className={styles["tag"]}>{tagText}</span>)
            }
            {console.log(props.tags)}

            {/* <TagList data={tagArr}/> */}
            {/* <span className={styles["tag"]}>{props.tag1}</span>
            <span className={styles["tag"]}>{props.tag2}</span>
            <span className={styles["tag"]}>{props.tag3}</span> */}
          </div>
}