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
      <Row className="top-footer" justify="space-between" gutter={[16, 40]}>
        <Col xs={24} sm={24} md={10} lg={12} xl={6}>
          <Row gutter={[16, 20]}>
            <Col span={24}>
              <Title level={4}>ABOUT OUR COMPANY</Title>
            </Col>
            <Col span={24}>
              <img src="footer-logo.png" width={80} height={80} />
            </Col>
            <Col span={24}>
              <Text>
                At our construction company, we specialize in crafting
                one-of-a-kind and luxurious properties that are sure to impress.
                Let us inspire you with our outstanding workmanship and
                expertise..
              </Text>
            </Col>
            {/* <Col span={24}>
                        <Button >Our Team</Button>
                    </Col> */}
          </Row>
        </Col>
        <Col xs={24} sm={9} md={6}>
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
              <Button type="text" href="/our-services">
                OUR SERVICES
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
                        Azim: 905-669-0471
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
                      <Button type="text" href="tel:+12894004307 ">
                        Faraz: (289) 400-4307 
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
                      <Button type="text" href="#">
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
