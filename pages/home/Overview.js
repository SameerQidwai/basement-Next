import React from 'react'
import { Col, Row, Typography, Image } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const {Title , Text} = Typography
function Overview() {
    // const []
    const scroll= (direction) =>{
        let far = $( '.smallCarousel' ).width()/2*direction;
        let pos = $('.smallCarousel').scrollLeft() + far;
        $('.smallCarousel').animate( { scrollLeft: pos }, 1000)
    }
    return (
        <Row justify="center" className="overview" >
            <Col span={24} >
                <Title level={3} className="overview-font3">COMPANY OVERIVEW</Title> 
            </Col>
            <Col span={24} >
                <Title level={1} className="overview-font1">Basement Contractors</Title>
            </Col>
            <Col span={22}>
                <Row gutter={[35,0]} style={styles} wrap={false}>
                    <Col xs={22} sm={18} md={12} lg={6}>
                        <Image src={'/basement1.jpg'}  width={'100%'} height={'100%'} />  
                    </Col>
                    <Col xs={22} sm={18} md={12} lg={6}>
                        <Image src={'/basement2.jpg'}  width={'100%'} height={'100%'} />  
                    </Col>
                    <Col xs={22} sm={18} md={12} lg={6}>
                        <Image src={'/basement3.jpg'} width={'100%'} height={'100%'}  /> 
                    </Col>
                    <Col>
                        <Image src={'/basement4.jpg'}  width={'100%'} height={'100%'} /> 
                    </Col>
                    <Col xs={22} sm={18} md={12} lg={6}>
                        <Image src={'/basement5.jpg'}  width={'100%'} height={'100%'} /> 
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Overview

const styles ={
    overflow: 'auto', 
    overflowY: 'hidden',
    margin: '0 auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
}


{/* <div className="smallCarousel">
<span className="sCarouselArrows arrow-left" > 
<LeftOutlined 
    style={{fontSize: 36}} 
    onClick={()=>scroll(null,-1)}
/>
</span>
<Col offset={1}>
<Image src={'/basement1.jpg'}  width={413} height={276} style={{padding: 20}} />  
</Col>
<Col offset={1}>
<Image src={'/basement2.jpg'}  width={413} height={276} style={{padding: 20}} />  
</Col>
<Col offset={1}>
<Image src={'/basement3.jpg'} width={413} height={276}  style={{padding: 20}} /> 
</Col>
<Col>
<Image src={'/basement4.jpg'}  width={413} height={276} style={{padding: 20}} /> 
</Col>
<Col offset={1}>
<Image src={'/basement5.jpg'}  width={413} height={276} style={{padding: 20}} /> 
</Col>
<span className="sCarouselArrows arrow-right"  >
<RightOutlined 
    style={{fontSize: 36}} 
    // onClick={()=>scroll(null,1)}
/>
</span>
</div> */}