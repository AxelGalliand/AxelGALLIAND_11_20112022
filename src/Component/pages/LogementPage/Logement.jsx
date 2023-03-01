import React, {useEffect, useState} from "react";
import styles from './Logement.module.css';
import { Carrousel } from "../../Carrousel/Carrousel";
import testIMG from "../../../IMG/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
import { Dropdown } from "../../Dropdown/Dropdown";
import { InfoLogement } from "../../InfoLogement/InfoLogement";
import { useParams } from "react-router-dom";

const tagArr= ["food","drink", 'tea'];
const imgList = [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ]

export default function Logement (){
  const [locations, setLocations] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState(false);
  let {id} = useParams();
  console.log(id)
	useEffect(() => {
		setIsLoading(true)
		fetch("/location.json")
			.then(response => response.json())
			.then(data => {
				setLocations(data)
        setIsLoading(false)
        const LocationId = locations.filter((location) => location.id === id)[0]
        console.log(LocationId);
        return LocationId
	
			})
			.catch(err => {
				setIsLoading(false)
				setErr("Oupss")
			})
		},[]);

	if (err) return <div>{err}</div>

	if (isLoading) return <div>Chargement...</div>
  return (
    <div className={styles["logement"]}>
      <Carrousel imgList={imgList}/>
      <InfoLogement title={locations.title} tags={tagArr} name="Alexandre Dumas" pic={testIMG}/>
      <div className={styles["logement_descrAndEquip"]}>
        <Dropdown title="HEllo">
          <p className={styles["descr_para"]}>Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p>
        </Dropdown>
        <Dropdown title="Liste">
          <ul className={styles["descr_para"]}>
            <li>Climatisation</li>
            <li>Wi-fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li>
          </ul>
        </Dropdown>
      </div>
    </div>
  )}