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
            <Title level={1}>
              Make The Most Out Of Your Space - A Valuable Room For Your Needs
            </Title>
          </Col>
          <Col sm={24} md={24} xs={24}>
            <Row justify="center" align="middle" gutter={10}>
              <Col>
                <Button
                  type="ghost"
                  ghost
                  size="large"
                  block
                  className="conact-area-btn"
                  href="tel:+16472189786"
                >
                  <span>CALL US</span>
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  size="large"
                  className="conact-area-btn"
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