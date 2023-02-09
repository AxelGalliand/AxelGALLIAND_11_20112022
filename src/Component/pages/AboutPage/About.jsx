import React from "react";
import styles from './About.module.css';
import { AboutImg } from "../../About_img/About_img"; 

export default function About (){
  return (
    <div className={styles["About"]}>
      <AboutImg/>
    </div>
  )
}