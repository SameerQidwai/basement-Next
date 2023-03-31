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
        <Row className="choose-container" justify="center" align="stretch" gutter={[0,20]}>
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Title level={2} className="choose-title c-goldish">Why CHOOSE US?</Title>
          </Col>
          <Col xs={24} sm={24} md={24} className="txt-center">
            <Row justify="center">
              <Col xs={22} sm={22} md={22}>
                <Title level={5} className="choose-text c-white">
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
                      <Avatar
                          className="choose-number bgc-blackish c-white"
                          size={80} 
                      ><span className='choose-number'>01</span></Avatar>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                        <Avatar
                          className="choose-icon bgc-white c-blackish"
                          size={80} 
                          icon={<HeartOutlined />}
                      />
                      {/* <img
                        className="choose-icon"
                        src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/circle_1.jpg"
                        alt="Renovation Expert"
                      /> */}
                    </Col>
                    <Title level={2} className="choose-card-title c-blackish">Skilled &amp; Trained</Title>
                    <p className='choose-card-txt c-blackish'>
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
                      <Avatar
                          className="choose-number bgc-blackish c-white"
                          size={80} 
                      ><span className='choose-number'>02</span></Avatar>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                      <Avatar
                          className="choose-icon bgc-white c-blackish"
                          size={80} 
                          icon={<BookOutlined />}
                      />
                    </Col>
                    <Title level={2} className="choose-card-title c-blackish">Honest Customer Service</Title>
                    <p className='choose-card-txt c-blackish'>
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
                      <Avatar
                          className="choose-number bgc-blackish c-white"
                          size={80} 
                      ><span className='choose-number'>03</span></Avatar>
                    </Col>
                    <Col sm={24} xs={24} className="txt-center">
                      {/* change this with ant icon */}
                      <Avatar
                          className="choose-icon bgc-white c-blackish"
                          size={80} 
                          icon={<BarsOutlined />}
                      />
                    </Col>
                    <Title level={2} className="choose-card-title c-blackish">Fully Licensed</Title>
                    <p className='choose-card-txt c-blackish'>
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
