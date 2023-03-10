import React, {useState} from "react";
import styles from './Carrousel.module.css';
import Chevron from "../svgFolder/Chevron.svg";

export function Carrousel ({imgList}) {
	const [counter, setCounter] = useState(0);
  const nbImg = imgList.length;


  return (
    <div className={styles["carrousel"]}>
       <img src={imgList[counter]} alt="representation du logement" className={styles["carrousel_img"]}/>
      {(nbImg > 1) && <button onClick={() => {
        if(counter === 0){
         setCounter(nbImg - 1)
        }
        else{
          setCounter(counter - 1)
        }
      }} className={styles["left_button"]}>
        <img className={styles["left_chevron"]} src={Chevron} alt="svg_chevron_gauche"/>
      </button>}
      {(nbImg > 1) && <button onClick={() => {
        if(counter === nbImg - 1){
          setCounter(counter - nbImg +1)
        }else{
		    setCounter(counter + 1)
        }
	     }} className={styles["right_button"]}> 
        <img className={styles["right_chevron"]} src={Chevron} alt="svg_chevron_droite"/>
       </button>}
       {(nbImg > 1) && <span className={styles["count"]}>{counter + 1}/{nbImg}</span>
     }
    </div>
  )
}