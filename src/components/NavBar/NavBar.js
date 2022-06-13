import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <h1 className="titulo">Tienda de celulares</h1>

      <Link to='/cart'>
        <CartWidget />
      </Link>

    <div>
      <NavLink className="navlink" to="/Apple">Apple</NavLink>


      <NavLink className="navlink" to="/Samsung">Samsung</NavLink>


      <NavLink className="navlink" to="/Xiaomi">Xiaomi</NavLink>
    </div>
    </>
    
  )
}


  export default NavBar;