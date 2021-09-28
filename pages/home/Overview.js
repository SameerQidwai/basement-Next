import React from 'react'
import { Col, Row, Typography, Image } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const {Title , Text} = Typography
function Overview() {
    // const []
    const scroll= (direction) =>{
        let far = $( '.smallCarousel' ).width()/2*direction;
        let pos = $('.smallCarousel').scrollLeft() + far;
        $('.smallCarousel').animate( { scrollLeft: pos }, 1000)
    }
    return (
        <Row justify={'space-around'} style={{marginTop:30, background: '#f7fbff'}}  >
            <Col span={24} style={{textAlign: 'center'}}>
                <Title level={3}>COMPANY OVERIVEW</Title> 
            </Col>
            <Col span={24} style={{textAlign: 'center'}}>
                <Title level={1}>Basement Contractors</Title>
            </Col>
            <Col span={22}>
                <div className="smallCarousel">
                    <span className="sCarouselArrows" > 
                        <ArrowLeftOutlined 
                            style={{fontSize: 36}} 
                            // onClick={()=>scroll(null,-1)}
                        />
                    </span>
                    <Col span={8} >
                        <Image src={'/basement1.jpg'}  width={413} height={276} style={{padding: 20}} />  
                    </Col>
                    <Col span={8}>
                        <Image src={'/basement2.jpg'}  width={413} height={276} style={{padding: 20}} />  
                    </Col>
                    <Col span={8}>
                        <Image src={'/basement3.jpg'} width={413} height={276}  style={{padding: 20}} /> 
                    </Col>
                    <Col span={8}>
                        <Image src={'/basement4.jpg'}  width={413} height={276} style={{padding: 20}} /> 
                    </Col>
                    <Col span={8}>
                        <Image src={'/basement5.jpg'}  width={413} height={276} style={{padding: 20}} /> 
                    </Col>
                    <span className="sCarouselArrows" style={{left: '97%'}}  >
                        <ArrowRightOutlined 
                            style={{fontSize: 36}} 
                            // onClick={()=>scroll(null,1)}
                        />
                    </span>
                </div>
            </Col>
        </Row>
    )
}

export default Overview
