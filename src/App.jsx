import NavBar from './components/NavBar/NavBar';
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Provecho!"/>
      <ProductCard/>
      <ContenedorProductos />
    </div>
  );
}

export default App;
