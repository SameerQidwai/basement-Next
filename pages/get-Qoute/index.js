import {useState} from 'react'
import {  Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { MailOutlined, PhoneFilled } from '@ant-design/icons';

const { Text, Title } = Typography

const index = () =>{
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

    return (
        <Row className='py-30' justify='center'>
            <Col span={22}>
                <Divider className='bg-f5 height-4'/>
            </Col>
            <Title className='txt-center'>We Are Ready To Listen</Title>
            <Row gutter={[90 , 0]} align="top" justify="center">
                <Col span={5} className="bg-f5 py-80 px-30">
                    <Row gutter={[90 , 0]}>
                        <Col span={24}>
                            <Title className='fs-15 ls-1 lh-1_45' level={5}> MAIN OFFICE</Title>
                        </Col>
                        <Col>
                            <Divider className='mt-0 bg-fed width-30 height-2'/>
                        </Col>
                    </Row>
                    <Row justify="space-between" className='mb-10'>
                        <Col><MailOutlined /></Col>
                        <Col span={22} >
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
                <Col span={11}>
                    <Form
                        id={'my-form'}
                        onFinish={onFinish}
                        form={form}
                        scrollToFirstError={true}
                        size="large"
                        layout="inline"
                        // onFieldsChange={validateInfo}
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
                            <Col span={4}>
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
        </Row>
    )
}

export default index