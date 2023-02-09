import React from "react";
import styles from './Logement.module.css';
import { Carrousel } from "../../Carrousel/Carrousel";
import Chevron from "../../svgFolder/Chevron.svg"
import testIMG from "../../../IMG/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
import { Dropdown } from "../../Dropdown/Dropdown";

// function testCarrousel () {
//   pictures [
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
//   ],
  
// }

const imgList = [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ]

export default function Logement (){
  return (
    <div className={styles["logement"]}>
      <Carrousel imgList={imgList}/>
      <div className={styles["carrousel"]}>
        <img src={testIMG} alt="carrousel" className={styles["carrousel_img"]} />
        <button className={styles["left_button"]}>
          <img className={styles["left_chevron"]} src={Chevron} alt="svg_chevron_droite"/>
        </button>
        <button className={styles["right_button"]}>
          <img className={styles["right_chevron"]} src={Chevron} alt="svg_chevron_gauche"/>
        </button>
        
        <span className={styles["count"]}>1/4</span>
      </div>

      <div className={styles["logement_info"]}>
        <div className={styles["logement_titleAndLocAndTag"]}>
          <span className={styles["logement_title"]}>Cozy loft on the canal Saint-Martin</span> 
          <span className={styles["logement_loc"]}>Paris, île-de-france</span>
          <div className={styles["logement_tag"]}>
            <span className={styles["tag"]}>Cozy</span>
            <span className={styles["tag"]}>Canal</span>
            <span className={styles["tag"]}>Paris 10</span>
          </div>
        </div>
        <div className={styles["logement_hostAndRating"]}>
          <div className={styles["logement_host"]}>
            <span className={styles["host_name"]}>Alexandre Dumas</span>
            <img src={testIMG} alt="proprietaire"className={styles["host_img"]}></img>
          </div>
          <div className={styles["rating"]}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
          </svg>
            {/* <img className={styles["rating_stars1"]} src={Star} alt="etoile de note"></img>
            <img className={styles["rating_stars2"]} src={Star} alt="etoile de note"></img>
            <img className={styles["rating_stars3"]} src={Star} alt="etoile de note"></img>
            <img className={styles["rating_stars4"]} src={Star} alt="etoile de note"></img>
            <img className={styles["rating_stars5"]} src={Star} alt="etoile de note"></img> */}
          </div>
        </div>
      </div>
      <div className={styles["logement_descrAndEquip"]}>
        <Dropdown title="HEllo"/>
        <Dropdown title="eauip"/>
        {/* <div className={styles["descr"]}>
          <div className={styles["descr_title"]}>
            <span className={styles["descr_title-text"]}>Description</span>
            <img className={styles["descr_title-chevron"]} src={Chevron} alt="svg_chevron_droite"></img>
          </div>
          <p className={styles["descr_para"]}>Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p>
        </div> */}
        {/* <div className={styles["equip"]}>
          <div className={styles["equip_title"]}>
            <span className={styles["equip_title-text"]}>Equipements</span>
            <img className={styles["equip_title-chevron"]} src={Chevron} alt="svg_chevron_droite"></img>
          </div>
          <ul className={styles["equip_list"]}>
            <li>Climatisation</li>
            <li>Wi-fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li>
          </ul>
        </div> */}
      </div>
    </div>
  )}