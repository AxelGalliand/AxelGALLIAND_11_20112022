import React from "react";
import styles from './Home.module.css';
import { CatchPhrase } from "../CatchPhrase";
import { CardsContener } from "../CardsContener"; 

export default function Home (){
  return (
    <div className={styles["home"]}>
      <CatchPhrase/>
      <CardsContener/>
    </div>
  )
}