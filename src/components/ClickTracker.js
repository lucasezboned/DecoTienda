import React from 'react'
import { useState, useEffect } from 'react'

export default function ClickTracker(){
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(new Date);



	const getClick = () => {
		console.log(count);
		setCount(count + 1);
		setDate(new Date());

	}

	return (
		<div>
		<h1>total de click {count} </h1>
		 <button onClick={getClick}>Click</button>
		</div>




		)


}