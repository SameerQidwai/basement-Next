import React from 'react';
import { Col, Row, Button, Tooltip, Typography, Layout } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  RedditOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Paragraph } = Typography;
const { Header } = Layout;
const Header1Dep = (props) => {
  return (
    <Header style={styles.header}>
      <div>
        <Row
          className="header1 px-30 py-2"
          justify="space-between"
          align="middle"
        >
          <Col className="pt-10" xs={24} sm={10}>
            <Row gutter={[16]} className="xs-center">
              <Col>
                <Tooltip title="Facebook" arrowPointAtCenter>
                  <a
                    target={'_blank'}
                    href="https://www.facebook.com/"
                    className="reset-a"
                  >
                    <FacebookOutlined className="fs-18" />
                  </a>
                </Tooltip>
              </Col>
              <Col>
                <Tooltip title="LinkedIn" arrowPointAtCenter>
                  <a
                    target={'_blank'}
                    href="https://www.linkedIn.com/"
                    className="reset-a"
                  >
                    <LinkedinOutlined className="fs-18" />
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
                    <InstagramOutlined className="fs-18" />
                  </a>
                </Tooltip>
              </Col>
            </Row>
          </Col>
          <Col className="header-1-right">
            <Row gutter={[20]} align="middle" className="xs-center">
              <Col>
                <Tooltip title="Goto" arrowPointAtCenter>
                  <a
                    target={'_blank'}
                    href="https://www.Blogspot.com/"
                    className="reset-a"
                  >
                    <span className="fs-13">Blog</span>
                  </a>
                </Tooltip>
              </Col>
              <Col>
                <Tooltip title="Contact Now" arrowPointAtCenter>
                  <Button
                    type="primary"
                    size="large"
                    block
                    href="tel:+16472189786"
                    className="bg-33f border-0"
                  >
                    <span className="fs-14">Call Us +1 (647) 218-9786</span>
                  </Button>
                </Tooltip>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Header>
  );
};
export default Header1Dep;

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
