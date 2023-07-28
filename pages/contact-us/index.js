import { useState } from 'react';
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Row,
  Typography,
} from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { FacebookIcon, InstgramIcon, ThreadIcon } from '../../Component/IconsLink';

const { Title } = Typography;

const Index = () => {
  const [required, setRequried] = useState(true);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    fetch('/api/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      setLoading(false);
      form.resetFields();
      close();
      if (res.status === 200) {
      }
    });
  };

  return (
    <Row>
      <Col span={24} className="bgc-white">
        <Row justify="center" className="consult">
          <Col span={24} className="txt-center">
            <Title level={1} className={'consult-title c-goldish'}>
              WE ARE HERE To Build your Dream
            </Title>
          </Col>
          <Col span={24} className="txt-center">
            <Title level={4} className={'consult-sub-title'}>
              CONTACT US NOW
            </Title>
          </Col>
          <Col span={24}>
            <p className="consult-para">
              Get in touch with our team of skilled basement builders in Ontario
              who share the same level of commitment as you. At My Legal
              Basement, we offer basement construction services for luxury
              developments, commercial, and industrial projects. Request a quote
              today and let us bring your vision to life.
            </p>
          </Col>
          <Col xs={24} md={20}>
            <Row>
              <Col xs={24} sm={8} md={8}>
                <Row className="contact-box" justify="center">
                  <Col span={24} className="txt-center">
                    <Avatar
                      className="contact-avatar bgc-goldish c-white"
                      size={80}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Title level={3}>Frequently Asked Questions</Title>
                  <Title level={5}>
                    <Button
                      type="text"
                      href="tel:+16472189786"
                      className="hover-c-goldish"
                    >
                      Azim Qidwai: +1 (647) 218-9786
                    </Button>
                  </Title>
                  <Title level={5}>
                    <Button
                      type="text"
                      href="tel:+12894004307"
                      className="hover-c-goldish"
                    >
                      Faraz Sami: +1 (289) 400-4307
                    </Button>
                  </Title>
                </Row>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <Row className="contact-main-box bgc-goldish">
                  <Col span={24} className="txt-center">
                    <Avatar
                      className="contact-main-avatar c-white"
                      size={80}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Col span={24}>
                    <Title level={3} className="txt-center">
                      Email Us
                    </Title>
                  </Col>
                  <Col span={24}>
                    <Title level={4} className="txt-center">
                      <Button
                        type="text"
                        href="mailto:reno@eliteox.com"
                        className="hover-c-blackish"
                      >
                        reno@eliteox.com
                      </Button>
                    </Title>
                    <Title level={4} className="txt-center">
                      <Button
                        type="text"
                        href="mailto:azim.qidwai@gmail.com"
                        className="hover-c-blackish"
                      >
                        azim.qidwai@gmail.com
                      </Button>
                    </Title>
                  </Col>
                  <Title level={3}>follow Us</Title>
                  <Row gutter={[16]} justify="center" style={{ width: '100%' }}>
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
                </Row>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <Row className="contact-last-box">
                  <Col span={24} className="txt-center">
                    <Avatar
                      className="contact-avatar  bgc-goldish c-white"
                      size={80}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Title level={3}>our opening hours</Title>
                  <Title level={4}>
                    <Button type="text" href="#">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </Button>
                  </Title>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="pt-30">
            <Title level={1} className="consult-form-title c-goldish">
              We Are Ready to Listen
            </Title>
          </Col>
          <Col span={24} className="txt-center mb-20">
            <Title level={4} className="consult-sub-title">
              Leave A Message
            </Title>
          </Col>
          <Col sm={23} md={18} xs={23} className="txt-enter">
            <Form
              id={'my-form'}
              onFinish={onFinish}
              form={form}
              scrollToFirstError={true}
              size="large"
              layout="inline"
              // onFieldsChange={validateInfo}
              validateTrigger="onSubmit"
            >
              <Row gutter={[0, 25]} justify="center">
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Enter Your name',
                      },
                    ]}
                  >
                    <Input placeholder={'Full Name:'} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="contact"
                    rules={[
                      {
                        required: required,
                        message: 'So We Can Contact You',
                      },
                    ]}
                  >
                    <Input placeholder={'Phone Number:'} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: required,
                        message: 'One Contact Information Required',
                      },
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                    ]}
                  >
                    <Input placeholder={'Email:'} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item name="subject">
                    <Input placeholder="Subject:" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="address">
                    <Input placeholder={'Address:'} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="message">
                    <Input.TextArea
                      autoSize={{ minRows: 3, maxRows: 3 }}
                      placeholder="HOW CAN WE HELP?"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="py-30" style={{ width: '100%' }} justify="center">
                <Col xs={18} md={8}>
                  <Button
                    type="primary"
                    size="large"
                    shape="round"
                    className="bgc-goldish b-goldish c-blackish  hover-bgc-goldish hover-b-goldish hover-c-blackish hover-s-goldish"
                    block
                    htmlType="submit"
                  >
                    <span>SEND NOW</span>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
