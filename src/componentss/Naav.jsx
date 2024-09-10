import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Naav.css'

function Naav() {
    return (
        <div className='NavbarContainer'>
            <Navbar expand="lg" className="bg-body-tertiary customNav">
                <Container fluid>
                    <Navbar.Brand href="#">ALOHA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Surfing</Nav.Link>
                            <Nav.Link href="#action2">Vulcano</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
                            <Button variant="outline-success">Book a Trip</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Naav