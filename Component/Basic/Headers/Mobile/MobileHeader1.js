import React from 'react';
import { Col, Row, Button, Tooltip, Typography, Layout } from 'antd';
import {
  FacebookFilled,
  TwitterSquareFilled,
  SolutionOutlined,
  PhoneFilled,
} from '@ant-design/icons';

const { Paragraph, Text } = Typography;
const { Header } = Layout;
const MobileHeader1 = (props) => {
  return (
    <Header style={styles.header}>
      <div>
        <Row
          className="hedear-basement-mobile-1"
          align="stretch"
          justify="space-between"
        >
          <Col>
            {/* xs={24} sm={8} md={6} */}
              <Button
                type="primary"
                // size="large"
                className="header-basment-mobile-btn-left"
                block
                onClick={()=>props.openModal()}
              >
                <SolutionOutlined />
                <span>Get A Quote</span>
              </Button>
            </Col>
          <Col className="header-basment-mobile-btn-icons">
            {/* xs={24} sm={8} md={10} */}
            <Row gutter={[16]} align="middle" justify="center">
              <Col>
                <Tooltip title="Facebook" arrowPointAtCenter>
                  <a
                    target={'_blank'}
                    href="https://www.facebook.com/"
                    className="reset-a"
                  >
                    <FacebookFilled className="fs-25 fb-icon" />
                  </a>
                </Tooltip>
              </Col>
              <Col>
                <Tooltip title="Twitter" arrowPointAtCenter>
                  <a
                    target={'_blank'}
                    href="https://www.twitter.com/"
                    className="reset-a"
                  >
                    <TwitterSquareFilled className="fs-25 tw-icon" />
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
                    <div className="instagram"></div>
                  </a>
                </Tooltip>
              </Col>
            </Row>
          </Col>
          <Col>
            {/* xs={24} sm={8} md={6} */}
            <a href="tel:+16472189786">
            <Button
              type="primary"
              // size="large"
              className="header-basment-mobile-btn"
              block
              href="tel:+16472189786"
            >
              <PhoneFilled />
              <span> 647 218 9786</span>
            </Button>
            </a>
          </Col>
        </Row>
      </div>
    </Header>
  );
};
export default MobileHeader1;

const styles = {
  header: {
    height: 'auto',
    padding: '0 1px 0px 0px',
    margin: 0,
    lineHeight: '20px',
    background: '#fff',
    // zIndex: 1,
    width: '100%',
  },
};
