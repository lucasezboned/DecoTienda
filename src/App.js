import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Title from './components/title.js';
import FunctionalComponent from './components/FunctionalComponent';

import ClickTracker from './components/ClickTracker';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <div ClassName="App">
      <header ClassName="">
        <Title/>
       
      </header>


      <div ClassName="Footer">
      <h1>Bienvenido a Decotienda</h1>
      


          <ItemListContainer />
 

 
  </div>


  <div ClassName="Footer">

    <ClickTracker/> 
  </div>



    </div>
  );
}

export default App;
