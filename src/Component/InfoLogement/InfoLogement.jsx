import React from "react";
import styles from './InfoLogement.module.css'
import { Rating } from "../Rating/Rating";


export function InfoLogement(props) {
  return (
    <div className={styles["logement_info"]}>
        <div className={styles["logement_titleAndLocAndTag"]}>
          <span className={styles["logement_title"]}>{props.title}</span> 
          <span className={styles["logement_loc"]}>{props.loc}</span>
          <div className={styles["logement_tag"]}>
            {
              props.tags.map(tagText => <span className={styles["tag"]}>{tagText}</span>)
            }

            {/* <TagList data={tagArr}/> */}
            {/* <span className={styles["tag"]}>{props.tag1}</span>
            <span className={styles["tag"]}>{props.tag2}</span>
            <span className={styles["tag"]}>{props.tag3}</span> */}
          </div>
        </div>
        <div className={styles["logement_hostAndRating"]}>
          <div className={styles["logement_host"]}>
            <span className={styles["host_name"]}>{props.name}</span>
            <img src={props.pic} alt="proprietaire"className={styles["host_img"]}></img>
          </div>
          <Rating count="3"/>
        </div>
      </div>
  )
}