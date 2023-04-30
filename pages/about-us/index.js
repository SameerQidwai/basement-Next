import React from 'react';
import { Col, Divider, Image, Row, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

const Index = (props) => {
  // const [open, setOpen] = useState(false)
  return (
    <Row justify={"center"}>
      <Col span={24}>
        {/* <div className="about-us-banner"> */}
            <Row justify={"center"} className="about-us-banner" align="middle">
                <Col>
                    <Title className="about-us-title">ABOUT US</Title>
                </Col>
            </Row>
          {/* <div className="about-us-title">ABOUT US</div> */}
        {/* </div> */}
        <div className="welcome-overlay about-us-overlay"></div>
      </Col>
      <Col span={20} className='py-30'>
        <Title className='c-white'>ABOUT ELITEOX BUILDING & RENOVATION</Title>
        <Paragraph className='c-white'>
          Welcome to EliteOX Reno, your trusted home renovation experts. With
          over 15+ years of experience in the industry, our team has the expertise and knowledge to transform
          your home into a beautiful, functional space that meets your needs and
          exceeds your expectations.
        </Paragraph>
        <Paragraph className='c-white'>
          At EliteOX Reno, we specialize in a wide range of home renovations,
          including basement renovations, legal basements, in-law suites,
          kitchen renovations, countertop installations, electrical and HVAC
          work, tiling, flooring, home additions, garden suites, concrete work,
          and below-grade entrances. No matter the size or complexity of your
          project, we are dedicated to providing exceptional service and
          delivering outstanding results that you will love.
        </Paragraph >
        <Paragraph className='c-white'>
          Our values are at the heart of everything we do at EliteOX Reno. We
          are committed to honesty, integrity, and transparency in all our
          interactions with our clients, partners, and team members. Our vision
          is to be the leading home renovation company in the industry, setting
          the highest standards of quality and craftsmanship while delivering
          exceptional value and unparalleled service.
        </Paragraph>
      </Col>
      <Col span={22}  className='py-20 txt-center' >
        {/* <Image src="/core_value.jpg" width={786} height={350}  /> */}
        <Image src="/core_value.jpg" width={'100%'}   />
      </Col>
    </Row>
  );
};

export default Index;
