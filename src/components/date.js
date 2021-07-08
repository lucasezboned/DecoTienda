import React from 'react'
import { useState, useEffect } from 'react'

export dafault function clickTracker(){
	const = useState(0);
	const = useState(new Date);

	useEffect(()=>{
		window.addEventListener('click',getclick)

		return ()=>{}
	})

	const getClick = () => {
		setCount(count + 1);
		setDate(new Date());

	}

	return (
		<div>
		<h1>total de click {count} </h1>
		<h2>tu ultimo cluck fue : {count == 0 ? 
		'no hay clicks registrados':date.toLocateTimeString()} </h2> 
		</div>




		)


}