import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Navigation from './components/navbar/navigation';
import Header from './components/header/header';
import './style.css';
import Brand from './components/service/brand';

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
    </Container>
  );
}

export default App;
