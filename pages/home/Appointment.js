import React, { useState, useRef } from 'react';
import { Col, Row, Typography, Button, Divider, Form, Input } from 'antd';
import { useIntersection } from '../../Component/useFunction'

const { Title, Text } = Typography;
const Appointment = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-100px'); // Trigger if 200px is visible from the element
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
    <Row className="sec-by-goldish" ref={ref}>
      <Col span={24} className="appointment">
        <Row
          gutter={[40, 0]}
          // align="top"
          className="choose-container row-margin-null"
          justify="center"
          align="stretch"
        >
          <Col xs={24} sm={24} md={9} className="appointment-legal mb-20">
            <Title level={1} className="legal-title c-goldish">Expertise in Legal Basements & more</Title>
            <Title level={5} className="legal-text">
              At ELITEOX RENO, we offer a range of services including legal 
              basement second dwelling units, kitchen remodeling, and complete teardowns. 
              Our team of architectural designers, engineers and project managers handle every 
              aspect of the project from start to finish. We prioritize staying on time and budget 
              to ensure maximum value for our clients. Contact us today to bring your vision to life.
            </Title>
            <Button
                // xs={24}
                // sm={24}
                size='large'
                ghost
                className="hover-b-goldish hover-c-goldish"
                // shape="round"
                href={'/service-pricing'}
                type="ghost"
              >
                VIEW MORE
              </Button>
            
          </Col>
          <Col xs={24} sm={24} md={14} data-animation={inViewport&&"animated fadeInLeft"}
                    className={inViewport&&"animated fadeInLeft"}>
            <Title level={5} className="appointment-sub-title c-goldish">We are ready to help build your dreams</Title>
            <Title level={1} 
            // className="appointment-title c-goldish" 
            className={inViewport?'appointment-title c-goldish blur-effect': 'appointment-title c-goldish'}>Get In Touch</Title>

            <Form
              id={'my-form'}
              onFinish={onFinish}
              form={form}
              scrollToFirstError={true}
              size="large"
              layout="inline"
              className='appointment-form'
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
              <Row className="py-30">
                <Button
                  type="primary"
                  size="large"
                  className="c-blackish b-goldish bgc-goldish hover-s-goldish hover-c-white"
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
