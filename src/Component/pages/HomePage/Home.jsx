import React from "react";
import styles from './Home.module.css';
import { CatchPhrase } from "../../CatchPhrase/CatchPhrase";
import { CardsContener } from "../../CardContener/CardsContener"; 

export default function Home (){
  return (
    <div className={styles["home"]}>
      <CatchPhrase/>
      <CardsContener/>
    </div>
  )
}