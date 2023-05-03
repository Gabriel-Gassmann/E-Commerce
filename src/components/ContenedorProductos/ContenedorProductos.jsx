import Producto from "../Producto/Producto"

const ContenedorProductos = () => {
//ejemplo A( es una forma de hacerlo ) 
  const props= {
    nombre: "Pizza 4 quezos",
    precio: 2500
  }


  return (
    <div>
{/* ejemplo B: otra forma de hacerlo */}
        <Producto nombre="Pescado" precio={1000} />
        <Producto nombre="pollo" precio={1200}/>
        {/* llamo props del ejemplo A */}
        <Producto {...props} /> 
    </div>
  )
}

export default ContenedorProductos