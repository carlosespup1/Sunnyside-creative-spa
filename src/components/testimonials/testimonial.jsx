import { Col } from 'react-bootstrap';
import './style.css'; 

const Testimonials = () => {
    return(
        //<h1 className="pt-5">CLIENTS TESTIMONIALS</h1>      
        <> 
            <Col xs={12} md={12}>
                <h1 className="testimonial-title pt-5">CLIENTS TESTIMONIALS</h1>
            </Col>
            <Col xs={12} md={3} className="testimonial py-5">
                <img src="issues/extra/emily.jpg" alt="girl" />
                <p>
                    We put our trust in Sunnyside and the delivered,
                    marking sure our needs were met and deadlines were
                    always hit.
                </p>
                <h2 className="name">Emily R.</h2>
                <span className="position">Marketing Director at GSM</span>
            </Col>
            <Col xs={12} md={3} className="testimonial py-5">
                <img src="issues/extra/image-thomas.jpg" alt="girl" />
                <p>
                    Sunnyside´s enthusiasm couple with their keen interest in our
                    brand´s success made it a satisfying and enjoyable
                    experience.
                </p>
                <h2 className="name">Thomas S.</h2>
                <span className="position">Chief Operating Officer at CLP</span>
            </Col>
            <Col xs={12} md={3} className="testimonial py-5">
                <img src="issues/extra/image-jennie.jpg" alt="girl" />
                <p>
                    incredible end result! Our sales increased over 400%
                    when we worked with SunnySide. Highly recommended!
                </p>
                <h2 className="name">Jennie F.</h2>
                <span className="position">Business Owner at FESSA</span>
            </Col>
        </>
    )
}

export default Testimonials;