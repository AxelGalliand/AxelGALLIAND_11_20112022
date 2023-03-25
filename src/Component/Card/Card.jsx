import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Card.module.css';

export function Card (props) {
  let navigate = useNavigate()
  const cardId = (locId) => {
    navigate("/Logement/"+locId)
  }
  return (
    <article className={styles["card"]} onClick={() => cardId(props.id)}>
      <img className={styles["card-img"]} src={props.cover} alt={props.title} />
      <span className={styles["card-title"]}>{props.title}</span>
    </article>
  )
}