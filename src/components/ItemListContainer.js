import React from 'react'
import { useState, useEffect } from 'react'

export default function FunctionMap() {

    var dataReceived = [
  {
    id:1,
    name:"Almohada",
    rol:"Hogar",
    camada: 300
  },
  {
    id:2,
    name:"Muñeco",
    rol:"Varios",
    camada: 350
  },
  {
    id:3,
    name:"Barbijo",
    rol:"Ropa",
    camada: 150
  },
  {
    id:4,
    name:"Almohadon",
    rol:"Hogar",
    camada: 400
  }
]

    const [productos,setProductos] = useState([]);

    /**Map es un methodo que genera un array
     * completamente nuevo y lo llena con los resultados 
     * de una funcion que se repite por cada elemento del
     * array que estamos procesando.
     * 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    const mapProductos = (array) =>{
            /**Una Map puede recibir hasta 3 parametros*/
                             //item - indice(opcional) - array(opcional) que esta iterando
   let newArray = array.map((item,index,conjuntoDeItems) =>{
    
          return(     {
                   id: item.id,
                   price: item.name,
                   categoria: item.rol


               }
               )
             
   })

        console.log(newArray);
        setProductos(newArray);

       
    }

    



let data  = dataReceived;
 



    const getProducts = ()=>{setTimeout( async () =>
    { 
        
           
        let llamada = fetch('http://localhost:4000/Products'); //Aca va el fetch al servidor;)
        let data =await llamada;



        /**procesar la respuesta */
        data = await data.text();
        data = JSON.parse(data);     



  
        
        /**llamando al servidor */

        
         
         mapProductos(data);
        },2000);  
    }

     







    useEffect(()=>{
        getProducts();
    })

    return (
        <div>
            {productos.map(element =>{


                  <div>
<div class="card">
  <img class="card-img-top" src="https://th.bing.com/th/id/OIP.n2bzJMdJ3-b9zFrP9H_KuQHaFj?pid=ImgDet&rs=1" alt="Card image cap"  />
  <div class="card-body">
    <h5 class="card-title">{ productos.name }</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
</div>
    </div>


            })
                }
           
        </div>
    )

}