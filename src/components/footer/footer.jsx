import { Col, Nav } from 'react-bootstrap';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';
import './style.css';

const Footer = () => {
    return (
        <>
            <Col className="text-center d-flex flex-column justify-content-around">
                <h1 className="title-footer">Sunnyside</h1>
                <Nav className="footer-nav justify-content-center bg-transparent" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className="nav-item" href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-item" eventKey="link-1">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-item" eventKey="link-2">Projects</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="social-media justify-content-center bg-transparent" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="facebook.com"><AiFillFacebook className="media" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><AiFillInstagram className="media"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><AiFillTwitterCircle className="media"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><FaPinterest className="media"/></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </>
    )
}

export default Footer;