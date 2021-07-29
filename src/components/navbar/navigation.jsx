import { Col, Navbar, Nav, Button } from 'react-bootstrap'
import './style.css';

const Navigation = () => {
    return (
        <Col>
            <Navbar bg="transparent" expand="lg" className="navigation">
                <Navbar.Brand href="#home" className="text-light brand">sunnyside</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-light">About</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Projects</Nav.Link>
                        <Nav.Link href="#link" className="text-dark contact">
                            <Button variant="contact">Contact</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}

export default Navigation;