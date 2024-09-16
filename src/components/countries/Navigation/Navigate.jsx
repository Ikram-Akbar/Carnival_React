import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const Navigate = () => {
    return (
        <div>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">Carnival</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">


                            <Nav.Link> <Link to="/home">Home</Link></Nav.Link>
                            <Nav.Link > <Link to="/posts">All Post</Link></Nav.Link>
                            <Nav.Link> <Link to="/meals">Meals Menu</Link></Nav.Link>
                            <Nav.Link> <Link to="/contact">Contact Us</Link></Nav.Link>
                            <Nav.Link> <Link to="/countries">Countries</Link></Nav.Link>
                            <NavDropdown title="Our Package" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Regular Package</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Popular Package
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Basic Package</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Enterprise Package
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigate;

