import { Link } from "react-router-dom";
import {Navbar,Nav } from 'react-bootstrap'
const Navbarr = (props) => {
    return ( 
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/" as={Link}>Home</Nav.Link>
                        <Nav.Link to="/about" as={Link}>About</Nav.Link>
                        <Nav.Link to="/contact" as={Link}>Contact us</Nav.Link>
                        <Nav.Link to="/cart" as={Link}>Shoping Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            {/* <Nav className="ml-auto">
            <NavItem>   <Link className="nav-link"   to="/">Home</Link> </NavItem> 
            <NavItem>   <Link  className="nav-link" to="/about">About</Link> </NavItem> 
            <NavItem>    <Link className="nav-link"   to="/contact">Contact</Link> </NavItem> 
            </Nav> */}
            
        </div>
     );
}
export default Navbarr;