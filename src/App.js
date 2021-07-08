import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Title from './components/title.js';
import FunctionalComponent from './components/FunctionalComponent';
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


function App() {
  return (
    <div className="App">
      <header className="">
        <Title/>
       
      </header>


      <footer ClassName="Footer">
      <h1>Bienvenido a Decotienda</h1>
      

        {dataReceived.map(person => {
        return(
          <FunctionalComponent
            key = { person.id}
            id = { person.id }
            name = { person.name }
            rol = { person.rol }
            camada = { person.camada}
          />
        )
      })}
  </footer>



    </div>
  );
}

export default App;
