import React, {useState, useEffect} from 'react'
import { Col, Row, Typography } from 'antd'
import { PhoneFilled, HourglassOutlined, UserOutlined } from '@ant-design/icons'

const {Title , Text} = Typography

const SuccessCounter = ({inViewport}) => {
    const [animation, setAnimation] = useState({experince: 0, network: 0, calls: 0})
    let countEnd = null
    useEffect(() => {
        if (inViewport){
            animating()
        }
      }, [animation]);
   
   const animating = () =>{
    countEnd = setInterval(() => {
        const {network, experince, calls} = animation
        if (network !== 250){
            setAnimation({  
                network: network + 5, 
                experince: experince === 60 ? experince: (network % 2 === 0) ? experince+3: experince,
                calls: network > 240? 1: calls
            })
            clearInterval(countEnd)
        }else{
            clearInterval(countEnd)
        }
    }, 2); 
   }


   return  (
        <Row justify="center" align="middle" gutter={[0, 50]} className="success-counter" >
            <Col xs={24} sm={24} md={8}  >
                <Row>
                    <Col span={24}>
                        <HourglassOutlined />
                    </Col>
                    <Col span={24} >
                        <Title>
                            {animation.experince}+ Years

                        </Title>
                    </Col>
                    <Col span={24} >
                        <Text>
                            COMBINED EXPERIENCE
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={8}>
                <Row>
                    <Col span={24}> <UserOutlined  /></Col>
                    <Col span={24} >
                        <Title>
                            {animation.network}+
                        </Title>
                    </Col>
                    <Col span={24} >
                        <Text>
                            PROFESSIONAL NETWORK
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={8}>
                <Row>
                    <Col span={24}><PhoneFilled /></Col>
                    <Col span={24} > 
                        <Title>
                            {animation.calls} One
                        </Title>
                    </Col>
                    <Col span={24} >
                        <Text>
                            CALLS IT TAKES TO CONNECT WITH US
                        </Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}


export default SuccessCounter
