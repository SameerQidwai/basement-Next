import React from 'react';
import {
  Col,
  Row,
  Typography,
  Button,
  Divider,
  Form,
  Input,
  Upload,
} from 'antd';
import { useRouter } from 'next/router';
import { UploadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const ContactArea = () => {
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

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Row>
      <Col span={24} className="conact-area s-blackish">
        <Row justify="center">
          <Col sm={24} md={18} xs={24}>
            <Button
              type="primary"
              size="large"
              block
              className="bgc-goldish c-white b-goldish  py-20 h-auto"
            >
              Upload Your Resume
            </Button>
          </Col>
          <Col sm={24} md={18} xs={24} className="carrers-form">
            <Form
              id={'my-form'}
              onFinish={onFinish}
              form={form}
              scrollToFirstError={true}
              size="large"
              layout="inline"
              // onFieldsChange={validateInfo}
              style={{ width: '100%' }}
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
                        required: true,
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
                        required: true,
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
                  <Form.Item name="pincode">
                    <Input placeholder={'Pin Code:'} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="subject">
                    <Input placeholder="Subject:" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="Address:">
                    <Input.TextArea
                      autoSize={{ minRows: 3, maxRows: 3 }}
                      placeholder="Address:"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload
                      name="logo"
                      action="/upload.do"
                      listType="text"
                      maxCount="1"
                    >
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
              <Row className="py-30" style={{ width: '100%' }} justify="center">
                <Col xs={18} md={8}>
                  <Button
                    type="primary"
                    size="large"
                    shape="round"
                    className="b-goldish bgc-goldish c-white hover-s-goldish hover-c-blackish"
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

export default ContactArea;
