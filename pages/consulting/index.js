import { useState } from 'react';
import {
  Avatar,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Tooltip,
  Typography,
} from 'antd';
import { FacebookFilled, MailOutlined, PhoneFilled, TwitterSquareFilled, UserOutlined } from '@ant-design/icons';

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
        <Row justify="center" className="consult">
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
          <Col xs={24} md={20}>
            <Row>
              <Col xs={24} sm={8} md={8}>
                <Row className="contact-box" justify="center">
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
                  <Col span={24}>
                    <Title level={3} className="txt-center">
                      Email Us
                    </Title>
                  </Col>
                  <Col span={24}>
                    <Title level={4} className="txt-center">
                      <Button type="text" href="mail:info@mylegalbasement.ca">
                        info@mylegalbasement.ca
                      </Button>
                    </Title>
                  </Col>
                  <Title level={3}>follow Us</Title>
                  <Row gutter={[16]} justify="center"  style={{width:'100%'}} >
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
          <Col span={24} className="pt-30">
            <Title level={1} className="consult-form-title">
              We Are Ready to Listen
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
