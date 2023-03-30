import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import { useWindowDimensions } from '../../Component/useFunction'
const { Title, Text } = Typography;

const Planning = () =>{
    const {height, width} = useWindowDimensions()
    return (
        <div style={{...style.contentStyle(width), ...style.carousel1}} className="carousel">
            <div>
                    <Row justify="center" align="bottom" gutter={[0, 5]} >
                        <Col span={24} >
                            <Row justify="center">
                                <Col style={{backgroundColor: 'rgba(0,0,0,0.4)'}} className="carousel-heading">
                                    <Title className='carousel-title' > HOME RENOVATIONS TORONTO</Title> 
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} >
                            <Row justify='center'>
                                <Col className="carousel-subheading carousel-heading">
                                    <Text className='carousel-text'  > 
                                        We Turn Space into Awesome Living
                                    </Text>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>
        </div>
    )
}

export default Planning

const style = {
    contentStyle: (width)=>({
        height: width * 0.6 <1000 ?width * 0.6 :1000,
        width: width,
    }),
    carousel1: {
        backgroundImage: 'url(planning.jpg)'
    },
}