import React from 'react';
import { Col, Row, Button, Layout } from 'antd';
import {
  SolutionOutlined,
  PhoneFilled,
} from '@ant-design/icons';
import {useRouter} from 'next/router';
import { FacebookIcon, InstgramIcon, ThreadIcon } from '../../../IconsLink';

const { Header } = Layout;
const MobileHeader1 = (props) => {
  const router = useRouter();
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
              onClick={() => router.push('/contact-us')}
            >
              <SolutionOutlined />
              <span>Get A Quote</span>
            </Button>
          </Col>
          <Col className="header-basment-mobile-btn-icons">
            {/* xs={24} sm={8} md={10} */}
            <Row gutter={[16]} align="middle" justify="center">
              <Col>
                <FacebookIcon/>
              </Col>
              <Col>
                <InstgramIcon/>
              </Col>
              <Col>
                <ThreadIcon/>
              </Col>
            </Row>
          </Col>
          <Col>
            {/* xs={24} sm={8} md={6} */}
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
