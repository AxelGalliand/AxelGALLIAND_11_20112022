import React from "react";
import styles from './Card.module.css';

export function Card (props) {
  return (
    <article className={styles["card"]}>
      <img className={styles["card-img"]} src={props.cover} alt={props.title} />
      <span className={styles["card-title"]}>{props.title}</span>
    </article>
  )
}
