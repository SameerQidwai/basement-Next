import React from 'react';
import { Col, Row, Button, Tooltip, Typography, Layout } from 'antd';
import { FacebookFilled, PhoneOutlined, TwitterSquareFilled } from '@ant-design/icons';
import Image from 'next/image'
const { Paragraph, Text } = Typography;
const { Header } = Layout;
const Header1 = (props) => {
  return (
    <Header style={styles.header}>
      <div>
        <Row
          className="hedear-basement-1 bgc-blackish s-goldish"
          align="stretch"
          justify="space-between"
        >
          <Col xs={24} sm={10} md={10}>
            <div className="header_logo">
            <a 
            // href="https://mylegalbasement.ca/" 
            >
                <Image
                  src="/logo-mobile.png"
                  // alt="https://mylegalbasement.ca/"
                  width="100%"
                  height="100%"
                  layout="fill"
                />
              </a>
              </div>
              {/* <img
                className="header_logo"
                src="/logo-mobile.png"
                alt=""
              /> */}
          </Col>
          <Col>
            <Row justify="end" align="middle">
              <Col>
                {/* xs={24} sm={8} md={10} */}
                <Row gutter={[16]} justify="end" align="middle">
                  <Col>
                    <Tooltip title="Facebook" arrowPointAtCenter>
                      <a
                        target={'_blank'}
                        href="https://www.facebook.com/"
                        className="reset-a"
                      >
                        <FacebookFilled className="fs-25 fb-icon " />
                      </a>
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip title="Instagram" arrowPointAtCenter>
                      <a
                        target={'_blank'}
                        href="https://www.instagram.com/"
                        className="reset-a"
                      >
                        {/* <InstagramFilled  className="fs-25 ig-icon"/>  */}
                        <div className="instagram "></div>
                      </a>
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
              <Col className="s-blackish" >
                {/* xs={24} sm={8} md={6} */}
                <Button
                  type="primary"
                  size="large"
                  className="header-basement-btn bgc-goldish c-white"
                  block
                  href="tel:+16472189786"
                >
                  <Row align="middle" gutter={15}>
                    <Col>
                      <PhoneOutlined style={{fontSize: 48, marginTop:20}}/>
                    </Col>
                    <Col>
                      <span className="fs-13 lh-1">
                      Get your Free Estimate Now
                    </span>
                    <br />
                    <span> 647 218 9786</span>
                    </Col>
                  </Row>
                 
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Header>
  );
};
export default Header1;

const styles = {
  header: {
    height: 'auto',
    padding: '0 1px 0px 0px',
    margin: 0,
    lineHeight: '20px',
    background: '#1d1f1c',
    // zIndex: 1,
    width: '100%',
  },
};
