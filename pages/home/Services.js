import React, { useEffect } from 'react';
import {
  Col,
  Row,
  Typography,
  Image,
  Card,
  Avatar,
  Button,
  Carousel,
} from 'antd';
import {
  FormatPainterFilled,
  HomeFilled,
  LinkOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const cards = [
  {
    img: 'cover1.jpg',
    title: 'HOME',
    link: 'a',
    type: 'IMPROVEMENTS',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation BASEMENT RENOVATION Features coming soon',
    details: 'LOCATION: Richmond Hill',
  },
  {
    img: 'cover2.jpg',
    title: 'KITCHENS',
    link: 'a',
    type: 'RENOVATIONS',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation FULL HOME RENOVATION Features coming soon Project',
    details: 'Details coming soon ',
  },
  {
    img: 'cover3.jpg',
    title: 'BASEMENT',
    link: 'a',
    type: 'CONSTRUCTION',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation BATHROOM RENOVATION  Features coming soon ',
    details: 'LOCATION  Etobicoke,',
  },
  {
    img: 'cover4.jpg',
    title: 'ARCHITECTURAL DRAWINGS/',
    link: 'a',
    type: 'BUILDING PERMITS',
    typaLink: 'a',
    description:
      'Have A Project You Need Help With? Get a free consultation TOWNHOUSE KITCHEN  & BATH RENOVATION Feature',
    details: 'Details coming soon',
  },
  {
    img: 'cover5.jpg',
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
  return (
    <Row>
      <Col span={24}>
        <Row justify="center">
          <Col span={18} className="txt-center">
            <Title level={1}>
              {' '}
              <span>OUR</span> SERVICES
            </Title>
          </Col>
          <Col span={18} className="txt-center">
            <Text>
              As one of the leaders in residential construction, we offer a full
              design and build service.
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
                        <img
                            alt={cards[0].img}
                            src={cards[0].img}
                            className="card-Q-image"
                        />
                        <div className="card-Q-overlay">
                            <div className="card-Q-text">
                            <Row justify="center" gutter={16} align="middle">
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
                                <Title level={4} className="card-title">{cards[0].title}</Title>
                            </Col>
                            <Col span={24} className="txt-center">
                                <Text className="card-type"> {cards[0].type} </Text>
                            </Col>
                            <Col span={24} className="txt-center">
                            <Button size="large" shape="round" type="primary">
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
                        <img
                            alt={cards[1].img}
                            src={cards[1].img}
                            className="card-Q-image"
                        />
                        <div className="card-Q-overlay">
                            <div className="card-Q-text">
                            <Row justify="center" gutter={16} align="middle">
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
                                <Title level={4} className="card-title">{cards[1].title}</Title>
                            </Col>
                            <Col span={24} className="txt-center">
                                <Text className="card-type"> {cards[1].type} </Text>
                            </Col>
                            <Col span={24} className="txt-center">
                            <Button size="large" shape="round" type="primary">
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
                        <img
                            alt={cards[2].img}
                            src={cards[2].img}
                            className="card-Q-image"
                        />
                        <div className="card-Q-overlay">
                            <div className="card-Q-text">
                            <Row justify="center" gutter={16} align="middle">
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
                                <Title level={4} className="card-title">{cards[2].title}</Title>
                            </Col>
                            <Col span={24} className="txt-center">
                                <Text className="card-type"> {cards[2].type} </Text>
                            </Col>
                            <Col span={24} className="txt-center">
                            <Button size="large" shape="round" type="primary">
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
                        <img
                            alt={cards[3].img}
                            src={cards[3].img}
                            className="card-Q-image"
                        />
                        <div className="card-Q-overlay">
                            <div className="card-Q-text">
                            <Row justify="center" gutter={16} align="middle">
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
                                <Title level={4} className="card-title">{cards[3].title}</Title>
                            </Col>
                            <Col span={24} className="txt-center">
                                <Text className="card-type"> {cards[3].type} </Text>
                            </Col>
                            <Col span={24} className="txt-center">
                            <Button size="large" shape="round" type="primary">
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
                        <img
                            alt={cards[4].img}
                            src={cards[4].img}
                            className="card-Q-image"
                        />
                        <div className="card-Q-overlay">
                            <div className="card-Q-text">
                            <Row justify="center" gutter={16} align="middle">
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
                                <Title level={4} className="card-title">{cards[4].title}</Title>
                            </Col>
                            <Col span={24} className="txt-center">
                                <Text className="card-type"> {cards[4].type} </Text>
                            </Col>
                            <Col span={24} className="txt-center">
                            <Button size="large" shape="round" type="primary">
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
