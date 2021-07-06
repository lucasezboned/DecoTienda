import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Title extends React.Component {
	render(){


		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
				  <a class="navbar-brand" href="#">DecoTienda</a>
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse" id="navbarNav">
				    <ul class="navbar-nav">
				      
				      <li class="nav-item">
				        <a class="nav-link" href="#">Productos</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link" href="#">Informacion</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link disabled" href="#"><img src='https://static.vecteezy.com/system/resources/previews/000/583/299/original/online-shopping-bag-icon-vector.jpg' border="0" width="27px" height="22px" /></a>
				      </li>
    				</ul>
  					</div>
					</nav>
				</div>


			)
	}

}