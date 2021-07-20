import React from 'react'
import { useState, useEffect } from 'react'

export default function ClickTracker(){
    const [count,setCount] = useState(0);
    const [stock,setStock] = useState(10);



	const getClick = () => {
		console.log(count);


		if (count < stock){
			setCount(count + 1);
		}

	}

	const getClick2 = () => {
		console.log(count);


		if (count > 0){
			setCount(count - 1);
		}

	}






	return (
		<div>
		<h1>total de productos a comprar: {count}  Stock actual: {stock} </h1>


		 <button onClick={getClick}>Sumar</button>
		 <button onClick={getClick2}>Restar</button>
		</div>




		)


}