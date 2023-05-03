import CardWidget from "../CartWidget/CardWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Alta Comida!</h1>
        <nav>
            <ul>
                <li>Hamburguesas</li>
                <li>Pizzas</li>
                <li>Empanadas</li>
            </ul>
        </nav>

    <CardWidget/>
    </header>
  )
}

export default NavBar