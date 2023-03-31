import React from 'react';
import { Col, Row, Typography, Button, Divider, Card } from 'antd';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;
const Choose = () => {
  const router = useRouter();
  return (
    <Row>
      <Col span={24} className="choose">
        <Row className="choose-container" justify="center" align="stretch">
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Title level={2} className="choose-title">Why CHOOSE US?</Title>
          </Col>
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Row justify="center">
              <Col xs={22} sm={22} md={22}>
                <Title level={5} className="choose-text">
                  Are you looking for a reliable construction company that specializes in legal basement construction, 
                  kitchen remodeling, and home renovation? Look no further! Our team of construction and engineering 
                  professionals with over 30 years of industry experience offers end-to-end client experience that 
                  includes seamless communication, budgeting, staffing, on-site organization, and top-quality 
                  workmanship every time. Contact us today and let us bring our expertise to your next project!
                </Title>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} style={{ padding: '10px' }}>
            <Row gutter={[10,30]} justify="space-around" align="stretch">
              <Col xs={24} sm={24} md={7}   className="choose-col">
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
              <Col xs={24} sm={24} md={7}  className="choose-col">
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
              <Col xs={24} sm={24} md={7}  className="choose-col">
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
