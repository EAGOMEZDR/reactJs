import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Link to="/"><h1 className="titulo">Tienda de celulares</h1></Link>

      <Link to='/cart'>
        <CartWidget />
      </Link>

    <div>
      <NavLink className="navlink" to="/categoria/apple">Apple</NavLink>


      <NavLink className="navlink" to="/categoria/samsung">Samsung</NavLink>


      <NavLink className="navlink" to="/categoria/xiaomi">Xiaomi</NavLink>
    </div>
    </>
    
  )
}


  export default NavBar;