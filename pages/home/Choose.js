import React from 'react';
import { Col, Row, Typography, Button, Divider, Card } from 'antd';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;
const Choose = () => {
  const router = useRouter();
  return (
    <Row>
      <Col span={24} className="choose">
        <Row className="choose-container" justify="center">
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Title level={2}>Why CHOOSE US?</Title>
          </Col>
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Row justify="center">
              <Col xs={18} sm={18} md={18}>
                <Text>
                  Any individual who is looking for home renovation or
                  remodelling. Legal Basements is our speciality. Call us today
                  and bring our project management skills and extensive
                  construction experience to your next project.
                </Text>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} style={{ padding: '10px' }}>
            <Row gutter={30} justify="space-around" align="bottom">
              <Col xs={24} sm={8} md={8}>
                <Card className="choose-card">
                  <Row>
                    <Col sm={24} xs={24}>
                      <button className="choose-number">01</button>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                      <img
                        className="choose-icon"
                        src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/circle_1.jpg"
                        alt="Renovation Expert"
                      />
                    </Col>
                    <h2>Skilled &amp; Trained</h2>
                    <p>
                      We create exquisite basement spaces for new and existing
                      properties and provide the guidance, advice and support
                      you need for a successful project.
                    </p>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <Card className="choose-card">
                  <Row>
                    <Col sm={24} xs={24}>
                      <button className="choose-number">02</button>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                      <img
                        className="choose-icon"
                        src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/circle_2.jpg"
                        alt="Honesty Is The Best Policy"
                      />
                    </Col>
                    <h2>Honest Customer Service</h2>
                    <p>
                      We believe in upfront, honest customer service as our
                      business is dedicated to providing stress-free solutions.
                      We will keep you updated throughout the whole project.
                    </p>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <Card className="choose-card">
                  <Row>
                    <Col sm={24} xs={24}>
                      <button className="choose-number">03</button>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                      <img
                        className="choose-icon"
                        src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/circle_3.jpg"
                        alt="Legal & Honorable Workers"
                      />
                    </Col>
                    <h2>Fully Licensed</h2>
                    <p>
                      Our company is fully qualified with full residential and
                      commercial building licenses.
                    </p>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Choose;
