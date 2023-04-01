import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;
const ContactArea = () => {
  const router = useRouter();
  return (
    <Row className='s-t-goldish'>
      <Col span={24} className="conact-area choose-container">
        <Row>
          <Col sm={24} md={24} xs={24}>
            <Title level={1} className="conact-for-basment-renovation">
              Transform Your Space with Our Expertise - Customize Room As Per Your Needs
            </Title>
          </Col>
          <Col sm={24} md={24} xs={24}>
            <Row justify="center" align="middle" gutter={[10,20]}>
              <Col>
                <Button
                  type="primary"
                  size="large"
                  block
                  className="conact-area-btn  c-blackish bgc-goldish b-goldish s-blackish hover-b-goldish"
                  href="tel:+16472189786"
                >
                  <span>CALL US</span>
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  size="large"
                  className="conact-area-btn c-white bgc-blackish b-blackish  s-blackish hover-b-blackish"
                  block
                  href="tel:+16472189786"
                >
                  <span>CONTACT US</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContactArea;
