import { useState } from 'react';
import { Avatar, Button, Col, Divider, Form, Input, Row, Typography } from 'antd';
import { MailOutlined, PhoneFilled, UserOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

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
      <Col span={24}>
        <Row justify="center">
          <Col span={24} className="txt-center">
            <Title level={1} className={'consult-title'}>
              WE ARE HERE TO HELP YOU
            </Title>
          </Col>
          <Col span={24} className="txt-center">
            <Title level={4} className={'consult-sub-title'}>
              QUICK CONTACT
            </Title>
          </Col>
          <Col span={24}>
            <p className="consult-para">
              To talk to a team of basement builders in Ontario who hold
              themselves to the same high standards that you do, talk to the
              team at My Legal Basement today. We can quote on basement
              construction services for luxury developments, commercial, or
              industrial projects.
            </p>
          </Col>
          <Col span={20}>
            <Row>
              <Col xs={24} sm={8} md={8}>
                <Row className="contact-box">
                  <Col span={24} className="txt-center">
                    <Avatar
                      className="contact-avatar"
                      size={80}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Title level={3}>Frequently Asked Questions</Title>
                  <Title level={4}>
                    <Button type="text" href="tel:9058055633">
                      905 805 5633
                    </Button>
                  </Title>
                </Row>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <Row className="contact-main-box">
                  <Col span={24} className="txt-center">
                    <Avatar
                      className="contact-main-avatar"
                      size={80}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Title level={3}>Email Us</Title>
                  <Title level={4}>
                    <Button type="text" href="mail:info@mylegalbasement.ca">
                      info@mylegalbasement.ca
                    </Button>
                  </Title>
                  <Title level={3}>follow Us</Title>
                  <div className="col-sm-12 col-xs-12 no-padding t-c">
                    <div className="social_ic">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/mylegalbasement/"
                            target="_blank"
                          >
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/mylegalbasement.ca/?hl=en"
                            target="_blank"
                          >
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://www.linkedin.com/company/my-legal-basement/?originalSubdomain=ca"
                            target="_blank"
                          >
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <Row className="contact-last-box">
                  <Col span={24} className="txt-center">
                    <Avatar
                      className="contact-avatar"
                      size={80}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Title level={3}>our opening hours</Title>
                  <Title level={4}>
                    <Button type="text" href="#">
                      MONDAY - FRIDAY : 9am - 5pm
                    </Button>
                  </Title>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Title level={1} className="consult-form-title">
              We Are Ready to Listen
            </Title>
          </Col>
          <Col span={24}>
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
              <Row gutter={[0, 25]}>
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
                    <Input placeholder={'FULL NAME:'} />
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
                    <Input placeholder={'PHONE NUMBER:'} />
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
                    <Input placeholder={'EMAIL:'} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item name="subject">
                    <Input placeholder="SUBJECT:" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="address">
                    <Input placeholder={'ADDRESS:'} />
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
                    // className="conact-area-btn"
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
