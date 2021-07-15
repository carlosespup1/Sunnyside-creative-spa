import { Col } from 'react-bootstrap';
import Services from './service';
import './style.css';

const Brand = () => {
    return(
        <>
            <Col xs={12} md={6} className="first-row-1 rows-size"></Col>
            <Col xs={12} md={6} className="first-row-2 rows-size text-center d-flex flex-column align-items-center justify-content-center">
                <h1>Transform your <br></br> Brand</h1>
                <p className="describe py-5 w-75">We are a full service creative agency
                    specializing in helping brands grow fast.
                    Engage your clients throught compelling visuals
                    that do most of the marketing for you.
                </p>
                <h3 className="learn-more">Learn More</h3>
            </Col>
            <Col xs={12} md={6} className="second-row-1 rows-size"></Col>
            <Col xs={12} md={6} className="second-row-2 rows-size text-center d-flex flex-column align-items-center justify-content-center">
            <h1>Stand out to the right audience</h1>
                <p className="describe py-5 w-75">
                    Using a collaborative formula of designers, researchers,
                    photographers, videographers and copywriters, we´ll
                    build and extend your brand in digital places.
                </p>
                <h3 className="learn-more">Learn More</h3>
            </Col>
            <Services />
        </>
    )
}

export default Brand;