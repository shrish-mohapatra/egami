import React from 'react';
import {Row, Col} from 'antd';

function Hero() {

  return (
    <Row className="hero">
      <Col
        className="hero-text"
        sm={24} md={12}
    >
          <p className="hero-title">Upload and browse stunning images.</p>
          <p className="hero-desc">
              Developed by Shrish Mohapatra for the Summer 2021 Shopify Developer Intern Challenge.
          </p>
      </Col>
    </Row>
  );
}

export default Hero;