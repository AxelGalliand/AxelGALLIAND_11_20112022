import React, {useEffect, useState} from "react";
import './Carrousel.module.css';

export function Carrousel ({imgList}) {
	const [counter, setCounter] = useState(0);
//   const [locations, setLocations] = useState([]);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [err, setErr] = useState(false);
// 	useEffect(() => {
// 		setIsLoading(true)
// 		fetch("/location.json")
// 			.then(response => response.json())
// 			.then(data => {
// 				setLocations(data)
// 				setIsLoading(false)
// 			})
// 			.catch(err => {
// 				setIsLoading(false)
// 				setErr("Oupss")
// 			})
// 		},[]);

// 	if (err) return <div>{err}</div>

// 	if (isLoading) return <div>Chargement...</div>


  return (
    <div className="carrousel">
      <svg className="left_chevron"></svg>
      <svg onClick={() => {
		setCounter(counter + 1)
	  }} className="right_chevron"></svg>
      <img src={imgList[counter]} className="carrousel_img"/>
    </div>
  )
}