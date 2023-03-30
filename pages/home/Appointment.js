import React, { useState } from 'react';
import { Col, Row, Typography, Button, Divider, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import { MailOutlined, PhoneFilled } from '@ant-design/icons';

const { Title, Text } = Typography;
const Appointment = () => {
  const router = useRouter();
  const [required, setRequried] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    fetch('/api/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      form.resetFields();
      close();
      if (res.status === 200) {
      }
    });
  };

  return (
    <Row>
      <Col span={24} className="appointment">
        <Row
          gutter={[40, 0]}
          align="top"
          className="choose-container row-margin-null"
          justify="center"
        >
          <Col xs={24} sm={24} md={9} className="appointment-legal">
            <Title level={1} className="legal-title">LEGAL BASEMENT</Title>
            <Title level={5} className="legal-text">
              Whether its a legal basement second dwelling unit or a kitchen
              remodel or a complete teardown we provide all these services under
              one roof. Starting from the planning phase till the final move in
              we manage all aspects of the project through our team of expert
              architectural designers, engineers and project managers. With our
              experience in this industry, we know how to stay on time and
              budget to create maximum value for our clients.
            </Title>
            <a href={'/service-pricing'}>
            <Button
                // xs={24}
                // sm={24}
                size='large'
                ghost
                // shape="round"
                href={'/service-pricing'}
                type="ghost"
              >
                VIEW MORE
              </Button>
             </a>
            
          </Col>
          <Col xs={24} sm={24} md={14}>
            <Title level={5} className="appointment-sub-title">We are ready to help build your dreams</Title>
            <Title level={1} className="appointment-title">Get In Touch</Title>

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
                {/* <Col span={24}>
                  <Form.Item noStyle>
                    <Title level={5} className="appointment-sub-title">We are ready to help build your dreams</Title>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item noStyle>
                    <Title level={1} className="appointment-title">Get In Touch</Title>
                  </Form.Item>
                </Col> */}
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
              <Row className="py-30">
                <Button
                  type="primary"
                  size="large"
                  // className="conact-area-btn"
                  block
                  htmlType="submit"
                >
                  <span>SUBMIT</span>
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Appointment;
