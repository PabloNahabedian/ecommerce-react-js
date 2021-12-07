import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {

  const inicial = 1
  const max = 10

  return (
    <div className="App">
      <NavbarComp/>
      <ItemListContainer greeting="Soy ItemListContainer"/>
      <ItemCount inicial={inicial} max={max} />
    </div>    
  );
}

export default App;
