import React from 'react';
import { Col } from 'react-bootstrap';
import './style.css';
import { ReactComponent as Arrow } from './ArrowDown.svg';

const Header = () => {
    return(
        <Col class="header w-100">
            <h1 className="text-light">WE ARE CREATIVES</h1>
            <Arrow className="mb-5"/>
        </Col>
    );
}

export default Header;