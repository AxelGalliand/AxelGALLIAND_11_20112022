import React from "react";
import styles from './About.module.css';
import { AboutImg } from "../About_img"; 

export default function Home (){
  return (
    <div className={styles["About"]}>
      <AboutImg/>
    </div>
  )
}