import React, {useEffect, useState} from "react";
import styles from './Logement.module.css';
import { Carrousel } from "../../Carrousel/Carrousel";
import { Dropdown } from "../../Dropdown/Dropdown";
import { InfoLogement } from "../../InfoLogement/InfoLogement";
import { useParams } from "react-router-dom";



export default function Logement (){
  const [locations, setLocations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(false);
  let {id} = useParams();
  console.log(id)
	useEffect(() => {
		fetch("/location.json")
			.then(response => response.json())
			.then(data => {
				setLocations(data)
        setIsLoading(false)
			})
			.catch(err => {
				setIsLoading(false)
				setErr("Oupss")
			})
		},[]);
  const Location = locations.filter((location) => location.id === id)[0]

  
	if (err) return <div>{err}</div>

	if (isLoading) return <div>Chargement...</div>

  // if () return <Navigate to="/404" />
  
  return (
    <div className={styles["logement"]} key={Logement}>
      <Carrousel imgList={Location.pictures}/>
      <InfoLogement title={Location.title} tags={Location.tags} name={Location.host.name} pic={Location.host.picture} loc={Location.location} rating={Location.rating}/>
      <div className={styles["logement_descrAndEquip"]}>
        <div className={styles["logement_descr"]}>
          <Dropdown title="Description">
            <p className={styles["descr_para"]}>{Location.description}</p>
          </Dropdown>
        </div>
        <div className={styles["logement_descr"]}>
        <Dropdown className={styles["dropLoc"]} title="Equipements">
          <ul className={styles["descr_para"]}>
            {
              Location.equipments.map(equipment => <li className={styles["tag"]}>{equipment}</li>)
            }
            {/* <li>Climatisation</li>
            <li>Wi-fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li> */}
          </ul>
        </Dropdown>
        </div>
      </div>
    </div>
  )}