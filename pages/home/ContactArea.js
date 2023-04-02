import React, { useState } from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import EModal from '../../Component/Modals/EModal';

const { Title, Text } = Typography;
const ContactArea = (props) => {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  return (
    <Row className='s-t-goldish'>
      <Col span={24} className="conact-area choose-container">
        <Row>
          <Col sm={24} md={24} xs={24}>
            <Title level={1} className="conact-for-basment-renovation">
              Transform Your Space with Our Expertise - Customize Room As Per Your Needs
            </Title>
          </Col>
          <Col sm={24} md={24} xs={24}>
            <Row justify="center" align="middle" gutter={[10,20]}>
              <Col>
                <Button
                  type="primary"
                  size="large"
                  block
                  className="conact-area-btn  c-blackish bgc-goldish b-goldish s-blackish hover-b-goldish hover-bgc-blackish hover-s-goldish"
                  href="tel:+16472189786"
                >
                  <span>CALL US</span>
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  size="large"
                  className="conact-area-btn c-white bgc-blackish b-blackish  s-blackish hover-b-blackish hover-bgc-goldish hover-s-goldish"
                  block
                  onClick={()=>setOpen(true)}
                >
                  <span>CONSULTING</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <EModal visible={open} close={()=>setOpen(false)}/>
    </Row>
  );
};

export default ContactArea;
