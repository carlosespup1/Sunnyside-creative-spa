import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Navigation from './components/navbar/navigation';
import Header from './components/header/header';
import './style.css';
import Brand from './components/service/brand';
import Testimonials from './components/testimonials/testimonial'
import Square from './components/square/square';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Container fluid className="main">
      <Row className="nav">
        <Navigation />
      </Row>
      <Row className="header text-center">
        <Header />
      </Row>
      <Row className="services">
        <Brand />
      </Row>
      <Row className="testimonial text-center">
        <Testimonials />
      </Row>
      <Row className="square">
        <Square />
      </Row>
      <Row className="footer text-center">
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
