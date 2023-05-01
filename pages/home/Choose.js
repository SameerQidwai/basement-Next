import React from 'react';
import { Col, Row, Typography, Button, Divider, Card, Avatar } from 'antd';
import { useRouter } from 'next/router';
import { BarsOutlined, BookOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
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
                  If you're in search of a dependable construction company that
                  focuses on legal basement construction, kitchen remodeling,
                  and home renovation, then your search is over. Our team
                  consists of experienced construction and engineering
                  professionals with 15+ years of industry expertise, offering a
                  hassle-free client experience that encompasses transparent
                  communication, budgeting, staffing, on-site organization, and
                  premium workmanship. Reach out to us now and let us utilize
                  our skills on your next project!
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
                      <Title level={2} className="txt-center mb-5">Professional</Title>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Text> <p>Designers</p></Text>
                    </Col>
                    <Col sm={4} xs={4} className="txt-center">
                      <Divider className="process-line bgc-blackish" />
                    </Col>
                    {/* <Title level={2} className="choose-card-title c-blackish">Expertise &amp; Support</Title> */}
                    <Col sm={24} xs={24} className="txt-center">
                      <Paragraph className="choose-card-txt c-white"><p>
                        Our team is highly skilled and trained in creating
                        beautiful basement spaces for both new and existing
                        properties. We offer expert guidance, advice, and
                        support throughout the entire project to ensure its
                        success.</p>
                      </Paragraph>
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
                      <Title level={2} className="txt-center mb-5">TRUSTED</Title>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Text> <p>Reliable</p></Text>
                    </Col>
                    <Col sm={4} xs={4} className="txt-center">
                      <Divider className="process-line bgc-blackish" />
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Paragraph className="choose-card-txt c-white">
                        <p>At our company, trust is paramount. We prioritize
                        transparency and maintain open communication with our
                        clients to ensure complete confidence in our services.
                        Our mission is to deliver stress-free solutions, and we
                        will keep you fully informed throughout every step of
                        your project.</p>
                      </Paragraph>
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
                      <Title level={2} className="txt-center mb-5">EXPERTS</Title>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Text> <p>Meticulous</p></Text>
                    </Col>
                    <Col sm={4} xs={4} className="txt-center">
                      <Divider className="process-line bgc-blackish" />
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      <Paragraph className="choose-card-txt c-white">
                        <p>
                          Our expertise in construction is backed by our full
                          residential and commercial building licenses, which
                          allow us to deliver exceptional construction services
                          that meet industry standards and regulations.
                        </p>
                      </Paragraph>
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
