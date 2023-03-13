import React from "react";
import styles from './Home.module.css';
import { CatchPhrase } from "../../Component/CatchPhrase/CatchPhrase";
import { CardsContener } from "../../Component/CardContener/CardsContener"; 

export default function Home (){
  return (
    <div className={styles["home"]}>
      <CatchPhrase/>
      <CardsContener/>
    </div>
  )
}