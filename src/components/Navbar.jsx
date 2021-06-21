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
                        <Nav.Link to='/home' as={Link}>Home</Nav.Link>
                        <Nav.Link to="/menu" as={Link}>Menu</Nav.Link>
                        <Nav.Link to="/cart" as={Link}>Shoping Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
     );
}
export default Navbarr;