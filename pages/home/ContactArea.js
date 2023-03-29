import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;
const ContactArea = () => {
  const router = useRouter();
  return (
    <Row>
      <Col span={24} className="conact-area choose-container">
        <Row>
          <Col sm={24} md={24} xs={24}>
            <Title level={1} className="conact-for-basment-renovation">
              Make The Most Out Of Your Space - A Valuable Room For Your Needs
            </Title>
          </Col>
          <Col sm={24} md={24} xs={24}>
            <Row justify="center" align="middle" gutter={[10,20]}>
              <Col>
                <a href="tel:+16472189786">
                  <Button
                    type="ghost"
                    ghost
                    size="large"
                    block
                    className="conact-area-btn"
                  >
                    <span>CALL US</span>
                  </Button>
                </a>
              </Col>
              <Col>
              <a href="tel:+16472189786">
                <Button
                  type="primary"
                  size="large"
                  className="conact-area-btn"
                  block
                  href="tel:+16472189786"
                >
                  <span>CONTACT US</span>
                </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContactArea;
