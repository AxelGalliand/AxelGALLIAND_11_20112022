import styles from "./Dropdown.module.css"
import React,{useState} from "react"
import Chevron from "../../IMG/svgFolder/Chevron.svg"

export function Dropdown (props) {
  const [isOpen, setIsOpen] = useState(false);
  function ChevronClick () {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className={styles["descr"]}>
      <div  onClick={ChevronClick} className={styles["descr_title"]}>
        <span className={styles["descr_title-text"]}>{props.title}</span>
        <img  tabIndex={0} className={styles["descr_title-chevron"] + " " + styles[isOpen ? "" : "close" ]} src={Chevron} alt="svg_chevron_droite"></img>
      </div>
      {isOpen && props.children }
    </div>
  )
}