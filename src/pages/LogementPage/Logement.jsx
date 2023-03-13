import React, {useEffect, useState} from "react";
import styles from './Logement.module.css';
import { Carrousel } from "../../Component/Carrousel/Carrousel";
import { Dropdown } from "../../Component/Dropdown/Dropdown";
import { InfoLogement } from "../../Component/InfoLogement/InfoLogement";
import { useParams, Navigate } from "react-router-dom";

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
  const location = locations.filter((location) => location.id === id)[0]
  
	if (err) return <div>{err}</div>

	if (isLoading) return <div>Chargement...</div> 

  if (location === undefined) return <Navigate to="/404" />

  return (
    <div className={styles["logement"]} key={Logement}>
      <Carrousel imgList={location.pictures}/>
      <InfoLogement title={location.title} tags={location.tags} name={location.host.name} pic={location.host.picture} loc={location.location} rating={location.rating}/>
      <div className={styles["logement_descrAndEquip"]}>
        <div className={styles["logement_descr"]}>
          <Dropdown title="Description">
            <p className={styles["descr_para"]}>{location.description}</p>
          </Dropdown>
        </div>
        <div className={styles["logement_descr"]}>
        <Dropdown className={styles["dropLoc"]} title="Equipements">
          <ul className={styles["descr_para"]}>
            {
              location.equipments.map(equipment => <li key={equipment} className={styles["tag"]}>{equipment}</li>)
            }
          </ul>
        </Dropdown>
        </div>
      </div>
    </div>
  )}