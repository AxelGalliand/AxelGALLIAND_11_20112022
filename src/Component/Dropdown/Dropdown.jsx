import styles from "./Dropdown.module.css"
import React,{useState} from "react"
import Chevron from "../svgFolder/Chevron.svg"



export function Dropdown (props) {
  const [isOpen, setIsOpen] = useState(false);

  function ChevronClick () {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className={styles["descr"]}>
      <div onClick={ChevronClick} className={styles["descr_title"]}>
        <span className={styles["descr_title-text"]}>{props.title}</span>
        <img className={styles["descr_title-chevron"] + " " + styles[isOpen ? "" : "close" ]} src={Chevron} alt="svg_chevron_droite"></img>
        {/* {isOpen && } */}
      </div>
      {/* <p className={styles["descr_para"] + " " + styles[isOpen ? "" : "close"]}>Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p> */}
      {/* <p className={styles["descr_para"]} style={{display: isOpen ? "block" : "none"}}>Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p> */}
      {isOpen && <p className={styles["descr_para"]}>Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p>}
    </div>
  )
}