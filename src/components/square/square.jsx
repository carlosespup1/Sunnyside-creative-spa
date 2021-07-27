import { Col } from 'react-bootstrap';
import './style.css';

const Square = () => {
    return(
        <>
            <Col xs={6} md={3} className="first">
            </Col>
            <Col xs={6} md={3} className="second">  
            </Col>
            <Col xs={6} md={3} className="third">  
            </Col>
            <Col xs={6} md={3} className="fourth">
            </Col>
        </>
    )
}


export default Square;