import {useState} from 'react'
import {  Button, Col, Divider, Form, Input, Modal, Row, Typography } from "antd";
import { useWindowDimensions } from '../useFunction';
import { GlobalOutlined, PhoneFilled, MailOutlined } from '@ant-design/icons';

const { Text, Title } = Typography
export default function GetInContact ({visible, close}) {
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

    return( <div className="bg-f5 py-80" > 
    <Row gutter={[30 , 0]}  justify='center'>
        {/* Get a Free Consultation Today */}
        <Col span={24}>
            <Row justify='center'>
                <Col span={13}> 
                    <Title className='fw-3 ls-1 lh-2_27 txt-center bg-33f' level={1}>
                        We Are Ready to Listen
                    </Title> 
                </Col>
                <Col span={12}  className="mb-16"> 
                    <Text className='fw-4 ls-1 lh-1_45 c-74' level={1}>
                        Let us know how we can help with your next home renovation project?
                    </Text> 
                </Col>
            </Row>
        </Col>
        <Col span={12}>
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
                    <Col>
                        <Button  
                            size="large"
                            block
                            htmlType="submit"
                            type="primary"
                            className="bg-33f border-0" 
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
    </div>)
}