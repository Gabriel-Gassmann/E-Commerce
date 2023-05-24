import NavBar from './components/NavBar/NavBar';
// import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import './App.css';
// import ProductCard from './components/ProductCard/ProductCard';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Provecho!"/>
      <Contador inicial={1} stock={10}/>
    </div>
  );
}
//      <ProductCard/>
//<ContenedorProductos />
export default App;
