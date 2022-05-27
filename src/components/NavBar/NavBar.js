import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
  return (
    <>
      <h1 className="titulo">Tienda de celulares</h1>

      <CartWidget />


    <a className="navBarLink"
    href="https://www.google.com/"
    target="_blank"
    rel="noopener noreferrer">
    Apple</a>


    <a className="navBarLink"
    href="https://www.google.com/"
    target="_blank"
    rel="noopener noreferrer">
    Samsung</a>


    <a className="navBarLink"
    href="https://www.google.com/"
    target="_blank"
    rel="noopener noreferrer">
    XIaomi</a>

    </>
    
  )
}


  export default NavBar;