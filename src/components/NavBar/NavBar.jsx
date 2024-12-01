import CartWidjet from './CartWidget';
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='brand'>
            <img src='../../../public/logo.png'/>
            <p>FIGSVZLA</p>
        </div>
        <ul className='categories'>
            <li>Modulos</li>
            <li>Categorias</li>
            <li>Precios</li>
            <li>Contacto</li>
        </ul>
        <CartWidjet/>
    </nav>
  )
}

export default NavBar