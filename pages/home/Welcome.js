import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useRouter } from 'next/router';

const { Title, Paragraph } = Typography;
const Welcome = () => {
  return (
    <Row>
      <Col span={24} className="welcome">
        <div className="welcome-overlay"></div>
        <Row className="welcome-container" align="middle">
          <Col xs={24} sm={24} md={24} lg={12}>
            <img className="welcome-picture" src="/images/basement1.jpg" alt="" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Title level={1} className="welcome-title">Welcome to our legal basement service!</Title>
            <p className="welcome-describtions">
              We provide seamless communication, budgeting, staffing, and high-quality workmanship. 
              Trust us to create a legal basement that meets your needs. Choose us for your legal basement needs, 
              and experience the difference of working with a reliable and experienced construction company.!
            </p>
            <Row></Row>
              <Button
                // xs={24}
                // sm={24}
                size='large'
                ghost
                shape="round"
                className="hover-b-goldish hover-c-goldish"
                href={'/service-pricing'}
                type="ghost"
              >
                LEARN MORE
              </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Welcome;
