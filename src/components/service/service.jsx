import { Col } from 'react-bootstrap';
import './style.css';

const Services = () => {
    return(
        <>
            <Col xs={12} md={6} className="g-design-service service d-flex flex-column text-center justify-content-end">
                <h1>Graphic Design</h1>
                <p className="pb-5">
                    Great design meke you memorable. We deliver
                    at work that underscores your brand message and
                    captures potencial client´s attention. 
                </p>
            </Col>
            <Col xs={12} md={6} className="g-photo-service service d-flex flex-column text-center justify-content-end">
            <h1>Photography</h1>
                <p className="pb-5">
                    Increise your credibility by getting the most
                    stunning, high-quality photos that improve your
                    bussiness image.
                </p>
            </Col>
        </>
    )
}

export default Services;