import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import {
  PhoneFilled,
  ClockCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';
// import GMap from "../../Core/GMap"
const { Title, Text } = Typography;

const WidgetFooter = () => {
  return (
    <>
      <Row className="top-footer" justify="space-between" gutter={[8, 40]}>
        <Col xs={24} sm={24} md={10} lg={12} xl={6}>
          <Row gutter={[16, 20]}>
            <Col span={24}>
              <Title level={4}>ABOUT OUR COMPANY</Title>
            </Col>
            <Col span={24}>
              {/* <img src="footer-logo.png" width={80} height={80} /> */}
              <img src="/logos/logo-smokey_150.svg"  />
            </Col>
            <Col span={24}>
              <Text>
                <p>
                At <b>ELITEOX RENO</b>, we specialize in crafting
                one-of-a-kind and luxurious properties that are sure to impress.
                Let us inspire you with our outstanding workmanship and
                expertise.
                </p>
              </Text>
            </Col>
            {/* <Col span={24}>
                        <Button >Our Team</Button>
                    </Col> */}
          </Row>
        </Col>
        <Col xs={24} sm={6} md={3}>
          <Row gutter={[16, 5]}>
            <Col span={24}>
              <Title level={4}>QUICK LINK</Title>
            </Col>
            <Col span={24}>
              <Button type="text" href="/">
                HOME
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="/our-process">
                OUR PROCESS
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="/our-projects">
                OUR PROJECTS
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="/careers">
                CAREERS
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="/about-us">
                ABOUT US
              </Button>
            </Col>
            {/* <Col span={24}>
              <Button type="text" href="/blog">
                BLOG
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="#">
              SERVICES AREAS
              </Button>
            </Col> */}
            <Col span={24}>
              <Button type="text" href="/contact-us">
                CONTACT US
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={7} md={5}>
          <Row gutter={[16, 5]}>
            <Col span={24}>
              <Title level={4} >MUNICIPALITIES</Title>
            </Col>
            <Col md={12} sm={24} xs={12} >
              <Button type="text" href="#">
                OAKVILLE
              </Button>
            </Col>
            <Col md={12} sm={24} xs={12} >
              <Button type="text" href="#">
                MILTON
              </Button>
            </Col>
            <Col md={12} sm={24} xs={12} >
              <Button type="text" href="#">
                BURLINGTON
              </Button>
            </Col>
            <Col md={12} sm={24} xs={12} >
              <Button type="text" href="#">
                HALTON HILLS
              </Button>
            </Col>
            <Col md={12} sm={24} xs={12} >
              <Button type="text" href="#">
                BRAMPTON
              </Button>
            </Col>
            <Col md={12} sm={24} xs={12} >
              <Button type="text" href="#">
                TORONTO
              </Button>
            </Col>
            <Col md={12} sm={24} xs={12} >
              <Button type="text" href="#">
                GUELPH
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="#">
                VAUGHAN
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="#">
                NIAGARA
              </Button>
            </Col>
            <Col span={23}>
              <Button type="text" href="#">
                CAMBRIDGE
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="#">
                KITCHENER
              </Button>
            </Col>
            <Col span={24}>
              <Button type="text" href="#">
                MISSISSAUGA
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={8} lg={12} xl={6}>
          <Row gutter={[16, 20]}>
            <Col span={24}>
              <Title level={4}>CONTACT US TODAY</Title>
            </Col>
            <Col span={24}>
              <Row gutter={[0, 10]}>
                <Col span={24}>
                  <Row justify="space-around" align='middle' className="hover-with-logo">
                    <Col>
                      <MailOutlined className="logo"/>
                    </Col>
                    <Col span={22}>
                      <Button
                        type="text"
                        href="mailto:reno@eliteox.com?subject=Please Add Subject For Better Reach"
                      >
                        reno@eliteox.com
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="space-around" align='middle' className="hover-with-logo">
                    <Col>
                      <MailOutlined className="logo"/>
                    </Col>
                    <Col span={22}>
                      <Button
                        type="text"
                        href="mailto:azim.qidwai@gmail.com?subject=Please Add Subject For Better Reach"
                      >
                        azim.qidwai@gmail.com
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>
                      <PhoneFilled />
                    </Col>
                    <Col span={22}>
                      <Button type="text" href="tel:+16472189786">
                        Azim Qidwai: (647) 218-9786
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>
                      <PhoneFilled />
                    </Col>
                    <Col span={22}>
                      <Button type="text" href="tel:+12894004307">
                        Faraz Sami: (289) 400-4307 
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>
                      <ClockCircleOutlined />
                    </Col>
                    <Col span={22}>
                      <Button type="text" href="#" style={{whiteSpace: "break-spaces"}}>
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WidgetFooter;
