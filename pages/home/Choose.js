import React from 'react';
import { Col, Row, Typography, Button, Divider, Card, Avatar } from 'antd';
import { useRouter } from 'next/router';
import { BarsOutlined, BookOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const Choose = () => {
  const router = useRouter();
  return (
    <Row>
      <Col span={24} className="choose">
        <Row
          className="choose-container"
          justify="center"
          align="stretch"
          gutter={[0, 20]}
        >
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Title level={2} className="choose-title c-goldish">
              Why CHOOSE US?
            </Title>
          </Col>
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Row justify="center">
              <Col xs={22} sm={22} md={22}>
                <Title level={5} className="choose-text c-white">
                  Are you looking for a reliable construction company that
                  specializes in legal basement construction, kitchen
                  remodeling, and home renovation? Look no further! Our team of
                  construction and engineering professionals with over 30 years
                  of industry experience offers end-to-end client experience
                  that includes seamless communication, budgeting, staffing,
                  on-site organization, and top-quality workmanship every time.
                  Contact us today and let us bring our expertise to your next
                  project!
                </Title>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} style={{ padding: '10px' }}>
            <Row gutter={[10, 30]} justify="space-around" align="stretch">
              <Col xs={24} sm={24} md={7} className="choose-col">
                <div className="choose-overlay"></div>
                <Card className="choose-card">
                  <Row justify="center">
                    <div className="choose-overlay"></div>
                    <Col sm={24} xs={24}>
                      <Title className="txt-center mb-5">Professional</Title>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Text>Designers</Text>
                    </Col>
                    <Col sm={4} xs={4} className="txt-center">
                      {' '}
                      <Divider className="process-line bgc-blackish" />
                    </Col>
                    {/* <Title level={2} className="choose-card-title c-blackish">Expertise &amp; Support</Title> */}
                    <Col sm={24} xs={24} className="txt-center">
                      <p className="choose-card-txt c-white">
                        We skilled and trained in creating exquisite basement
                        spaces for both new and existing properties. We provide
                        expert guidance, advice, and support throughout the
                        entire project to ensure its success.
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={7} className="choose-col">
                <div className="choose-overlay"></div>
                <Card className="choose-card">
                  <Row justify="center">
                    <div className="choose-overlay"></div>
                    <Col sm={24} xs={24}>
                      <Title className="txt-center mb-5">TRUSTED</Title>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Text>Reliable</Text>
                    </Col>
                    <Col sm={4} xs={4} className="txt-center">
                      {' '}
                      <Divider className="process-line bgc-blackish" />
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <p className="choose-card-txt c-white">
                        we value transparency and strive to provide open
                        communication with our clients. Our business is
                        dedicated to offering stress-free solutions, and we'll
                        keep you informed every step of the way throughout your
                        project.
                      </p>
                    </Col>
                    {/* <Title level={2} className="choose-card-title c-blackish">Transparent Customer Service</Title> */}
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={7} className="choose-col">
                <div className="choose-overlay"></div>
                <Card className="choose-card">
                  <Row justify="center">
                    <div className="choose-overlay"></div>
                    <Col sm={24} xs={24}>
                      <Title className="txt-center mb-5">EXPERTS</Title>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Text>Meticulous</Text>
                    </Col>
                    <Col sm={4} xs={4} className="txt-center">
                      {' '}
                      <Divider className="process-line bgc-blackish" />
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <p className="choose-card-txt c-white">
                        As a professional construction company, we hold full
                        residential and commercial building licenses to ensure
                        that we can deliver top-quality construction services
                        that meet industry standards and regulations.
                      </p>
                    </Col>
                    {/* <Title level={2} className="choose-card-title c-blackish">Professional Licensing</Title> */}
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
