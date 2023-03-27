import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useRouter } from 'next/router';

const { Title, Paragraph } = Typography;
const Welcome = () => {
  const router = useRouter();
  return (
    <Row>
      <Col span={24} className="welcome">
        <Row className="welcome-container" align="middle">
          <Col xs={24} sm={24} md={12}>
            <img className="welcome-picture" src="/basement1.jpg" alt="" />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Title level={4}>Welcome to my LEGAL BASEMENT</Title>
            <Paragraph>
              We offer an end-to-end client experience that includes seamless
              communication, budgeting, staffing, on-site organization, and
              solid, quality handy work every time. A construction company which
              knows how to make legal basements!
            </Paragraph>
            <Row>
              <Button
                // xs={24}
                // sm={24}
                ghost
                shape="round"
                href={'/service-pricing'}
                type="ghost"
              >
                LEARN MORE
              </Button>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Welcome;
