import React from "react";
import styles from './About.module.css';
import { AboutImg } from "../../Component/About_img/About_img"; 
import { Dropdown } from "../../Component/Dropdown/Dropdown";

export default function About (){
  return (
    <div className={styles["About"]}>
      <AboutImg/>
      <div className={styles["About_drop"]}>
        <Dropdown title="Fiabilité">
          <p className={styles["descr_para"]}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos equipes.</p>
        </Dropdown>
        <Dropdown title="Respect">
          <p className={styles["descr_para"]}> La bienveillance fais partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinages entraînera une exculsion de notre plateforme.</p>     
        </Dropdown>
        <Dropdown title="Service">
          <p className={styles["descr_para"]}> Nos équipes se tiennent à votre disposition pour vous fournir une experience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Dropdown>
        <Dropdown title="Sécurité">
          <p className={styles["descr_para"]}>  La securité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de Sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standards sont bien respectées.Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p> 
        </Dropdown>
      </div>
    </div>
  )
}