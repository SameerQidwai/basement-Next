import React, { useEffect } from 'react';
import { Col, Row, Typography, Card, Avatar, Button, Carousel } from 'antd';
import { LinkOutlined, SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
const { Title, Text, Paragraph } = Typography;

const cards = [
  {
    img: '/HOME_Remodling_Renovations.jpeg',
    title: 'HOME',
    link: '/our-services/home-improvements/',
    type: 'IMPROVEMENTS',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation BASEMENT RENOVATION Features coming soon',
    details: 'LOCATION: Richmond Hill',
  },
  {
    img: '/Kitchen_Renovations_Imrovments.jpg',
    title: 'KITCHENS',
    link: '/our-services/kitchens',
    type: 'RENOVATIONS',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation FULL HOME RENOVATION Features coming soon Project',
    details: 'Details coming soon ',
  },
  {
    img: '/Basements-legal-basment.jpeg',
    title: 'BASEMENT',
    link: '/our-services/basement-construction/',
    type: 'CONSTRUCTION',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation BATHROOM RENOVATION  Features coming soon ',
    details: 'LOCATION  Etobicoke,',
  },
  {
    img: '/Architectural_drawing_permits_builds_Planning.jpg',
    title: 'ARCHITECTURAL DRAWINGS/',
    link: '/our-services/architectural-drawings-building-permits/',
    type: 'BUILDING PERMITS',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation TOWNHOUSE KITCHEN  & BATH RENOVATION Feature',
    details: 'Details coming soon',
  },
  {
    img: '/Bathroom.jpg',
    title: 'BATHROOMS',
    link: 'a',
    type: 'RENOVATIONS',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation WONDERFUL 2 STORY CAPE COD CHARMER Features',
    details: 'Details coming soon',
  },
];

const Services = () => {
  const router = useRouter();
  return (
    <Row className="bgc-white pt-20">
      <Col span={24}>
        <Row justify="center">
          <Col span={24} className="txt-center">
            <Title level={3} className="service-title c-blackish ">
              <span>OUR</span> Services
            </Title>
          </Col>
          <Col span={20} className="txt-center">
            <Text className="service-txt c-blackish">
              At our construction company, we excel in providing a complete
              design and build service for residential projects, placing us at
              the forefront of the industry.
            </Text>
          </Col>
          <Col span={23}>
            <Carousel
              autoplay
              dots={false}
              style={{ cursor: 'pointer' }}
              swipeToSlide
              infinite={true}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              responsive={[
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                  },
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  },
                },
              ]}
              //   arrows
              // nextArrow={'<'}
              // prevArrow={'>'}
            >
              <div className="work-overview">
                <Card
                  // hoverable
                  className="work-card"
                  cover={
                    <div>
                      <div className="card-Q-cover">
                        <div className="card-Q-image">
                          <Image
                            layout="fill"
                            alt={cards[0].img}
                            src={cards[0].img}
                          />
                        </div>
                        {/* <img
                            alt={cards[0].img}
                            src={cards[0].img}
                            className="card-Q-image"
                        /> */}
                        <div className="card-Q-overlay">
                          <div className="card-Q-text">
                            <Row
                              justify="center"
                              gutter={16}
                              align="middle"
                              onClick={() => router.push(cards[0].link)}
                            >
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<LinkOutlined />}
                                />
                              </Col>
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<SearchOutlined />}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col span={24}>
                                <Title level={4}>{cards[0].title}</Title>
                              </Col>
                            </Row>
                            <Row justify="center">
                              <Col>
                                <Text>{cards[0].type}</Text>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <Row>
                        <Col span={24}>
                          <Title level={4} className="card-title c-blackish">
                            {cards[0].title}
                          </Title>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Text className="card-type c-blackish">
                            {' '}
                            {cards[0].type}{' '}
                          </Text>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Button
                            size="large"
                            shape="round"
                            type="primary"
                            className="hover-c-white bgc-goldish b-goldish c-blackish hover-s-goldish"
                            href={cards[0].link}
                          >
                            Learn More
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  }
                />
              </div>
              <div className="work-overview">
                <Card
                  // hoverable
                  className="work-card"
                  cover={
                    <div>
                      <div className="card-Q-cover">
                        <div className="card-Q-image">
                          <Image
                            layout="fill"
                            alt={cards[1].img}
                            src={cards[1].img}
                          />
                        </div>
                        <div className="card-Q-overlay">
                          <div className="card-Q-text">
                            <Row
                              justify="center"
                              gutter={16}
                              align="middle"
                              onClick={() => router.push(cards[1].link)}
                            >
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<LinkOutlined />}
                                />
                              </Col>
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<SearchOutlined />}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col span={24}>
                                <Title level={4}>{cards[1].title}</Title>
                              </Col>
                            </Row>
                            <Row justify="center">
                              <Col>
                                <Text>{cards[1].type}</Text>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <Row>
                        <Col span={24}>
                          <Title level={4} className="card-title">
                            {cards[1].title}
                          </Title>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Text className="card-type"> {cards[1].type} </Text>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Button
                            size="large"
                            shape="round"
                            type="primary"
                            className="hover-c-white bgc-goldish b-goldish c-blackish hover-s-goldish "
                            href={cards[1].link}
                          >
                            Learn More
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  }
                />
              </div>
              <div className="work-overview">
                <Card
                  // hoverable
                  className="work-card"
                  cover={
                    <div>
                      <div className="card-Q-cover">
                        <div className="card-Q-image">
                          <Image
                            layout="fill"
                            alt={cards[2].img}
                            src={cards[2].img}
                          />
                        </div>
                        <div className="card-Q-overlay">
                          <div className="card-Q-text">
                            <Row
                              justify="center"
                              gutter={16}
                              align="middle"
                              onClick={() => router.push(cards[2].link)}
                            >
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<LinkOutlined />}
                                />
                              </Col>
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<SearchOutlined />}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col span={24}>
                                <Title level={4}>{cards[2].title}</Title>
                              </Col>
                            </Row>
                            <Row justify="center">
                              <Col>
                                <Text>{cards[2].type}</Text>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <Row>
                        <Col span={24}>
                          <Title level={4} className="card-title">
                            {cards[2].title}
                          </Title>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Text className="card-type"> {cards[2].type} </Text>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Button
                            size="large"
                            shape="round"
                            type="primary"
                            className="hover-c-white bgc-goldish b-goldish c-blackish hover-s-goldish"
                            href={cards[2].link}
                          >
                            Learn More
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  }
                />
              </div>
              <div className="work-overview">
                <Card
                  // hoverable
                  className="work-card"
                  cover={
                    <div>
                      <div className="card-Q-cover">
                        <div className="card-Q-image">
                          <Image
                            layout="fill"
                            alt={cards[3].img}
                            src={cards[3].img}
                          />
                        </div>
                        <div className="card-Q-overlay">
                          <div className="card-Q-text">
                            <Row
                              justify="center"
                              gutter={16}
                              align="middle"
                              onClick={() => router.push(cards[3].link)}
                            >
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<LinkOutlined />}
                                />
                              </Col>
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<SearchOutlined />}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col span={24}>
                                <Title level={4}>{cards[3].title}</Title>
                              </Col>
                            </Row>
                            <Row justify="center">
                              <Col>
                                <Text>{cards[3].type}</Text>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <Row>
                        <Col span={24}>
                          <Title
                            level={4}
                            className="card-title"
                            style={{ fontSize: '16px' }}
                          >
                            {cards[3].title}
                          </Title>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Text className="card-type"> {cards[3].type} </Text>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Button
                            size="large"
                            shape="round"
                            type="primary"
                            className="hover-c-white bgc-goldish b-goldish c-blackish hover-s-goldish"
                            href={cards[3].link}
                          >
                            Learn More
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  }
                />
              </div>
              <div className="work-overview">
                <Card
                  // hoverable
                  className="work-card"
                  cover={
                    <div>
                      <div className="card-Q-cover">
                        <div className="card-Q-image">
                          <Image
                            layout="fill"
                            alt={cards[4].img}
                            src={cards[4].img}
                          />
                        </div>
                        <div className="card-Q-overlay">
                          <div className="card-Q-text">
                            <Row
                              justify="center"
                              gutter={16}
                              align="middle"
                              onClick={() => router.push(cards[4].link)}
                            >
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<LinkOutlined />}
                                />
                              </Col>
                              <Col>
                                <Avatar
                                  className="service-avatar"
                                  size={48.19}
                                  icon={<SearchOutlined />}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col span={24}>
                                <Title level={4}>{cards[4].title}</Title>
                              </Col>
                            </Row>
                            <Row justify="center">
                              <Col>
                                <Text>{cards[4].type}</Text>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <Row>
                        <Col span={24}>
                          <Title level={4} className="card-title">
                            {cards[4].title}
                          </Title>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Text className="card-type"> {cards[4].type} </Text>
                        </Col>
                        <Col span={24} className="txt-center">
                          <Button
                            size="large"
                            shape="round"
                            type="primary"
                            className="hover-c-white bgc-goldish b-goldish c-blackish hover-s-goldish"
                            href={cards[4].link}
                          >
                            Learn More
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  }
                />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Services;
