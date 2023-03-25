import React, {useEffect, useState} from "react";
import { Card } from "../Card/Card"; 
import './CardsContener.modules.css';

export function CardsContener () {
	const [locations, setLocations] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState(false);
	useEffect(() => {
		setIsLoading(true)
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

	if (err) return <div>{err}</div>

	if (isLoading) return <div>Chargement...</div>

  return (
    <div className="card-contener">
	  {locations.map(location => <Card id={location.id} key={location.id} className={location.id} title={location.title} cover={location.cover} />)}
    </div>
  )
}