import {useState} from 'react'
import {  Col, Divider, Form, Input, Modal, Row, Typography } from "antd";
import { useWindowDimensions } from '../useFunction';
import { GlobalOutlined, PhoneFilled, MailOutlined } from '@ant-design/icons';

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
        title={<div>Get a Free Consultation Today</div>}
        maskClosable={true}
        centered={false}
        destroyOnClose
        visible={visible}
        okButtonProps={{ htmlType: 'submit', form: 'my-form' }}
        okText={"Submit"}
        zIndex={1}
        width={width - (width *10/100)}
        confirmLoading={loading}
        onCancel={()=>{form.resetFields(); close()}}
    >
        <Row gutter={[30 , 0]} align="top">
            <Col span={6} className="bg-f5 py-80 px-80">
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
                <Row justify="space-between" className='mb-10'>
                    <Col><MailOutlined /></Col>
                    <Col span={22} className="address-span">
                        <Text >azim.qidwai@gmail.com</Text>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col> <PhoneFilled /> </Col>
                    <Col span={22}>
                        <Text>905-669-0471</Text>
                    </Col>
                </Row>
            </Col>
            <Col span={18}>
                <Form
                    id={'my-form'}
                    onFinish={onFinish}
                    form={form}
                    scrollToFirstError={true}
                    size="large"
                    layout="inline"
                    onFieldsChange={validateInfo}
                    validateTrigger='onSubmit'
                >
                    <Row gutter={[0 , 30]}>
                        <Col span={24}>
                            <Form.Item noStyle >
                                <Text>We are ready to help build your dreams</Text>
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item noStyle>
                                        <Text >FIRST NAME <span className='required-sign'>*</span></Text>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item name="Fname" >
                                        <Input 
                                            autoFocus
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter Your name',
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={24} md={12}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item noStyle>
                                        <Text >LAST NAME</Text>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item name="Lname" >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={24} md={12}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item noStyle>
                                        <Text >EMAIL ADDRESS</Text>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
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
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={24} md={12}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item noStyle>
                                        <Text>HOME NUMBER</Text>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item name="contact" 
                                        rules={[
                                            {
                                                required: required,
                                                message: 'So We Can Contact You',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item noStyle>
                                        <Text >SUBJECT</Text>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item name="subject" >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item noStyle>
                                    <Text >HOW CAN WE HELP?</Text>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item name="message" >
                                    <Input.TextArea/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Modal>)
}