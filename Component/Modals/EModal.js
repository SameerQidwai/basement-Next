import {useState} from 'react'
import {  Button, Col, Divider, Form, Input, Modal, Row, Tooltip, Typography } from "antd";
import { useWindowDimensions } from '../useFunction';
import { GlobalOutlined, PhoneFilled, MailOutlined, TwitterSquareFilled, FacebookFilled } from '@ant-design/icons';
import { FacebookIcon, InstgramIcon, ThreadIcon } from '../IconsLink';

const { Text, Title } = Typography
export default function EModal ({visible, close}) {
    const {width, height} = useWindowDimensions()
    const [required, setRequried] = useState(true)
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)

    const onFinish = (values) => {
        setLoading(true)
          fetch('/api/send', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          }).then((res) => {
            setLoading(false)
            form.resetFields()
            close()
            if (res.status === 200) {
                
            }
          })
    }

    const validateInfo = () => {
        
        // console.log({contact: form.isFieldValidating().email})
        // console.log({fname: form.isFieldValidating()})
    }

    return( <Modal
        title={<div className='c-blackish'>Get a Free Consultation Today</div>}
        maskClosable={true}
        centered={false}
        destroyOnClose
        visible={visible}
        okButtonProps={{ htmlType: 'submit', form: 'modal-form' }}
        okText={"Submit"}
        zIndex={1001}
        width={width - (width *10/100)}
        confirmLoading={loading}
        onCancel={()=>{form.resetFields(); close()}}

    >
        <Row gutter={[30 , 0]} align="top">
            <Col span={6} className="bg-f5 py-30">
                <Row>
                    <Col span={24}>
                        {/* <Title className='fs-15 ls-1 lh-1_45' level={5}> MAIN OFFICE</Title> */}
                        <Title className='fs-15 ls-1 lh-1_45' level={5}>Contacts</Title>
                    </Col>
                    <Col>
                        <Divider className='mt-0 bg-fed width-30 height-2'/>
                    </Col>
                </Row>
                {/* <Row justify="space-between" className='mb-10'>
                    <Col><GlobalOutlined /></Col>
                    <Col span={22} className="address-span">
                        <Text >Office 936 The East Mall, 1st FL Toronto, ON M9B 6J9</Text>
                    </Col>
                </Row> */}
                <Row justify="space-between" className='mb-10' align='middle'>
                    <Col><MailOutlined /></Col>
                    <Col span={22}  >
                        <Button
                        type="link"
                        href="mail:reno@eliteox.com">reno@eliteox.com</Button>
                    </Col>
                </Row>
                <Row justify="space-between" className='mb-10' align='middle'>
                    <Col><MailOutlined /></Col>
                    <Col span={22}  >
                        <Button
                        type="link"
                        href="mail:azim.qidwai@gmail.com">azim.qidwai@gmail.com</Button>
                    </Col>
                </Row>
                <Row justify="space-between" className='mb-10' align='middle'>
                    <Col> <PhoneFilled /> </Col>
                    <Col span={22}>
                        <Button
                      type="link"
                      href="tel:+16472189786">Azim: +1 (647) 218-9786</Button>
                    </Col>
                </Row>
                <Row justify="space-between" className='mb-10' align='middle'>
                    <Col> <PhoneFilled /> </Col>
                    <Col span={22}>
                        <Button
                      type="link"
                      href="tel:+12894004307">Faraz: +1 (289) 400-4307</Button>
                    </Col>
                </Row>
                <Row justify="space-between" className='mb-10' align='middle'>
                <Col> <GlobalOutlined /> </Col>
                    <Col span={22}> Follow us </Col>
                </Row>
                <Row gutter={[16]} >
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
            </Col>
            <Col span={18}>
                <Form
                    id={'modal-form'}
                    onFinish={onFinish}
                    form={form}
                    scrollToFirstError={true}
                    size="large"
                    layout="inline"
                    onFieldsChange={validateInfo}
                    validateTrigger='onSubmit'
                    className="modal-form"
                >
                    <Row gutter={[0 , 25]}>
                        <Col span={24}>
                            <Form.Item noStyle >
                                <Text>We are ready to help build your dreams</Text>
                            </Form.Item>
                        </Col>
                        {/* <Row gutter={[0, 25]} justify="center"> */}
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
                </Form>
            </Col>
        </Row>
    </Modal>)
}