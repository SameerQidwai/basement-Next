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
            <Row justify='center'>
                <Col xs={18} sm={18} md={18}>
                    <Text>
                        Any individual who is looking for home renovation or remodelling.
                        Legal Basements is our speciality. Call us today and bring our
                        project management skills and extensive construction experience to
                        your next project.
                    </Text>
                </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} style={{padding: '10px'}}>
            <Row gutter={30} justify="space-around">
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
                        alt=""
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
                      <button className="choose-number">01</button>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                      <img
                        className="choose-icon"
                        src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/circle_1.jpg"
                        alt=""
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
                      <button className="choose-number">01</button>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                      <img
                        className="choose-icon"
                        src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/circle_1.jpg"
                        alt=""
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
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Choose;
