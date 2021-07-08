import 'bootstrap/dist/css/bootstrap.css';


function FunctionalComponent(props) {
    console.log("Soy el objeto props: ", props)
    return(
        <>



            <h3>Producto: { props.name } <br /> Foto: kh <br /> Precio: ${ props.camada} <br /> Categoria: { props.rol } <br /> <br /> </h3>
            
        </>
    )
}

export default FunctionalComponent