import React from 'react'
import { CheckOutlined } from '@ant-design/icons'
import { Col, Divider, Row, Typography } from 'antd'

const {Title, Text, Paragraph} = Typography

const builds =[
    {
        title: 'Step One: The Inquiry',
        points: [
            'Your initial call to us about having a custom home built or renovation completed.',
            'We will schedule a free consultation at your project location or at our office to discuss your project.'
        ],
    },
    {
        title: 'Step Two: The Consultation',
        points: [
            'The initial consultation meeting usually takes 1-1.5 hour.',
            'We will meet with you to obtain information regarding your upcoming project.',
            'If you have architectural drawings, we will continue to Step 4.',
            'If you don’t have drawings completed, we will continue to Step 3 requesting to complete our project questionnaire outlining your project wish list.',
            'We will discuss your family’s wants, needs and budget.',
            'We will discuss more information about our company and our process.'
        ],
    },
    {
        title: 'Step Three: The Design Process',
        points: [
            'We will set up a meeting with our in-house architect to discuss and review the completed questionnaire.',
            'We will review survey, design, zoning, committee of adjustments, engineering and permit requirements.',
            'We will put a quotation together for design and all requirements necessary to apply for permits.'
        ],
    },
    {
        title: 'Step Four:  Feature Sheet Development, Project Price and Contract',
        points: [
            'From the final drawings, we will develop a feature sheet with you for your project detailing specifications.',
            'The project quote is determined from final drawings and feature sheet specifications.',
            'Once the quote is approved and we have determined a final project budget/timeline then a contract is drawn up for your review and signature.'
        ],
    },
    {
        title: 'Step Five:  Building Your Project',
        points: [
            'We will meet before initial start of construction to discuss timeline and required details.',
            'Communication is very important, so we will schedule various onsite meetings as construction continues.',
            'Once the project is completed, we will have a pre-delivery inspection on site with you to answer any questions.'
        ],
    },
]

const index = () =>{
    return (
       <div className='py-80 px-30'>
        <Row justify='center'>
            <Col span={18}>
                <Row>
                    <Col span={24}>
                        <Title level={2}>5 Steps to a Successful Build</Title>
                    </Col>
                    <Col span={24}>
                        <Divider className='bg-ab'/>
                    </Col>
                    <Col span={24} >
                        {builds.map((el,index)=>(
                            <div key={index}>
                                <Title level={4} className="fw-3 fs-20 lh-1_45 c-33">
                                    {el.title}
                                </Title>
                                <Paragraph >
                                    <ul>
                                        {el.points.map(el=>(
                                            <li className='c-74 fs-15 lh-2_27'>{el}</li>
                                        ))}
                                    </ul>
                                </Paragraph>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Col>
        </Row>
       </div>
    )
}

export default index
