import React from 'react';
import { Col, Row, Typography, Image, Divider, Avatar, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useWindowDimensions } from '../../Component/useFunction';
// import Image from 'next/image';

const { Title, Text, Paragraph } = Typography;

const processes = [
  {
    title: 'Unlock More Living Space',
    description: `Discover the potential of your disused basement and transform it into valuable living space with our expert basement conversion services. We offer an affordable and practical solution to create additional bedrooms, entertainment areas, and utility rooms from an area of your home that would otherwise have been left unused or dedicated to storage. Our company specializes in basement construction below or near existing buildings, and we have the expertise to turn your basement into a beautiful and functional living space that meets your needs and budget. Contact us today to explore the possibilities of your basement and start enjoying more living space in your home. `,
  },
  {
    title: 'ENHANCING  PROPERTY VALUE',
    description: `At our company, we specialize in creating underground spaces that not only provide additional living areas but also increase the value of your property. Through our expertise in restricted access piling, underpinning, structural, temporary works, and groundworks, we can undertake even the most complex projects in-house, including multi-story basements and other living spaces that come with warranty support. Our efficient and reliable services are designed to help you realize the full potential of your property.`,
  },
  {
    title: 'ABSOLUTELY RELIABLE TEAM',
    description: `We prioritize clear communication and unwavering reliability when working on basement construction projects. Our team has the necessary experience to handle any challenges that may arise during the construction process, ensuring outstanding results. As a construction company in Ontario, we understand the importance of leaving nothing to chance when it comes to foundation work. Choose our trusted and dependable team for your basement construction needs.`,
  },
];

const index = () => {
  // eslint-disable-next-line
  const { height, width } = useWindowDimensions();
  return (
    <Row justify="center" className="bgc-white">
      <Col span={23} className="process-bg-image py-40">
        <div className="welcome-overlay process-overlay"></div>
        <Row justify={'center'}>
          <Col className="txt-right">
            <Title className="c-white" level={3}>
              EXPERIENCE
            </Title>
          </Col>
          <Col style={{ position: 'relative', left: -8 }}>
            <img src="/logos/new_shadow_center.svg" />
          </Col>
          <Col className="txt-left">
            <Title className="c-white" level={3}>
              QUALITY
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col className="txt-right">
            <Title className="c-white" level={3}>
              CUSTOMER SATISFACTION
            </Title>
          </Col>
          <Col>
            <div style={{ width: 300 }} />
          </Col>
          <Col>
            <Title className="c-white" level={3}>
              ASSURANCE
            </Title>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} className="txt-center">
        <Title className="process-elite-title c-goldish">
          <span>Our</span> Process
        </Title>
      </Col>
      <Col span={24}>
        <Row
          justify={'space-around'}
          align="middle"
          gutter={[0, 40]}
          className="px-30 pb-25"
        >
          <Col span={10} className="services-card bgc-blackish">
            <Title level={3} className="c-white">
              DESIGNING YOUR DREAMS
            </Title>
            <Paragraph className="c-white">
              <p>
                Before starting any basement renovation project, it's important
                to determine your wants and needs. At Eliteox Reno, we'll work
                closely with you to establish your vision for the space. Whether
                you're looking to create a family gathering area, home theater,
                gym, wine room, kitchen, guest suite, or even a rentable
                apartment, our team can turn your dreams into reality. Contact
                us today to get started.
              </p>
            </Paragraph>
          </Col>
          <Col span={10} className="txt-right">
            <Image
              width={'70%'}
              src="https://agmbasements.com/static/media/establish_wants_and_needs.f7b315d9.webp"
            />
          </Col>
          <Col span={10} className="txt-left">
            <Image
              width={'70%'}
              src="https://agmbasements.com/static/media/establish_wants_and_needs.f7b315d9.webp"
            />
          </Col>
          <Col span={10} className="services-card bgc-white">
            <Title level={3} className="c-goldish">
              BASEMENT DESIGN CONSULTATION
            </Title>
            <Paragraph className="c-goldish">
              <p>
                Collaborate with our experienced designer to create the basement
                of your dreams. Using your wish list and our expertise, we'll
                present a functional 3D concept with real-time adjustments to
                ensure your satisfaction. Get a comprehensive itemized list of
                high-quality materials, features, and components included in our
                package. Our detailed agreement and payment structure and
                budget-friendly financing options will make your dream basement
                a reality.
              </p>
            </Paragraph>
          </Col>
          <Col span={10} className="services-card bgc-blackish">
            <Title level={3} className="c-goldish">
              LET OUR EXPERTS GUIDE YOU!
            </Title>
            <Paragraph className="c-goldish">
              <p>
                Our expert Project Manager and Designer will conduct a thorough
                technical inspection of your space with the Design Concept,
                taking into account structural, plumbing, and mechanical
                layouts. They will make necessary adjustments or incorporate any
                changes you have decided on since the Virtual Design Appointment
                to create a Final Design that will serve as the blueprint for
                the build.
              </p>
            </Paragraph>
          </Col>
          <Col span={10} className="txt-right">
            <Image
              width={'70%'}
              src="https://agmbasements.com/static/media/establish_wants_and_needs.f7b315d9.webp"
            />
          </Col>
          <Col span={10} className="txt-left">
            <Image
              width={'70%'}
              src="https://agmbasements.com/static/media/establish_wants_and_needs.f7b315d9.webp"
            />
          </Col>
          <Col span={10} className="services-card bgc-white">
            <Title level={3} className="c-goldish">
              SELECT FINISHES
            </Title>
            <Paragraph className="c-goldish">
              <p>
                Our Designers can guide you through our array of high-quality
                included finishes and other optional choices to make your
                basement suit your personal style.
              </p>
            </Paragraph>
          </Col>
          <Col span={10} className="services-card bgc-blackish">
            <Title level={3} className="c-goldish">
              STREAMLINED CONSTRUCTION CREATION
            </Title>
            <Paragraph className="c-goldish">
              <p>
                Streamlined Construction Creation is our approach to making the
                construction process as seamless and hassle-free as possible for
                our clients. We take care of all the details, from ordering
                materials to scheduling deliveries and managing the build
                schedule. Our dedicated Project Managers keep you informed every
                step of the way, providing regular updates and addressing any
                concerns you may have.
              </p>
            </Paragraph>
          </Col>
          <Col span={10} className="txt-right">
            <Image
              width={'70%'}
              src="https://agmbasements.com/static/media/establish_wants_and_needs.f7b315d9.webp"
            />
          </Col>
          <Col span={10} className="txt-left">
            <Image
              width={'70%'}
              src="https://agmbasements.com/static/media/establish_wants_and_needs.f7b315d9.webp"
            />
          </Col>
          <Col span={10} className="services-card bgc-white">
            <Title level={3} className="c-goldish">
              OUR COMMITMENT TO EXCELLENCE
            </Title>
            <Paragraph className="c-goldish">
              <p>
                Our top priority is your satisfaction. Our commitment to you
                includes a comprehensive warranty and a willingness to address
                any minor imperfections that may arise. Our team of dedicated
                handymen will work tirelessly to ensure that every last detail
                is just right. Once your project is complete, we love to
                showcase our work with professional photography to document the
                stunning transformation of your space. You can trust that with
                us, your satisfaction is guaranteed.
              </p>
            </Paragraph>
          </Col>
          <Col span={10} className="services-card bgc-blackish">
            <Title level={3} className="c-goldish">
              JOIN OUR SATISFIED CUSTOMER COMMUNITY
            </Title>
            <Paragraph className="c-goldish">
              <p>
                Discover why Eliteox Reno is the top choice for homeowners
                looking to transform their basements into beautiful and
                functional living spaces. Our hundreds of satisfied customers
                can attest to the quality of our work and our commitment to
                excellence. Check out our Google Reviews and see for yourself
                why we stand out from our competitors.
              </p>
            </Paragraph>
          </Col>
          <Col span={10} className="txt-right">
            <Image
              width={'70%'}
              src="https://agmbasements.com/static/media/establish_wants_and_needs.f7b315d9.webp"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default index;
