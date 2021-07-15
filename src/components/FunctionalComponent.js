import 'bootstrap/dist/css/bootstrap.css';


function FunctionalComponent(props) {
    console.log("Soy el objeto props: ", props)
    return(
        

    <div>
<div class="card">
  <img class="card-img-top" src="https://th.bing.com/th/id/OIP.n2bzJMdJ3-b9zFrP9H_KuQHaFj?pid=ImgDet&rs=1" alt="Card image cap"  />
  <div class="card-body">
    <h5 class="card-title">{ props.name }</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
</div>
    </div>
           
            
        
    )
}

export default FunctionalComponent