import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

function NavBar() {
  return (
    <>
<Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand ><NavLink to="/">CellShop</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/">Inicio</NavLink></Nav.Link>
            <NavDropdown title="Celulares" id="basic-nav-dropdown">
              <NavDropdown.Item ><NavLink to="/categoria/apple">Apple</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/categoria/samsung">Samsung</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/categoria/xiaomi">Xiaomi</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link to='/cart'>
            <CartWidget />
            </Link>
    </Navbar>


    </>
    
  )
}

export default NavBar;