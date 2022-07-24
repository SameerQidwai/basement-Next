import React from 'react'
import {useRouter} from 'next/router';
import { CheckOutlined } from '@ant-design/icons'
import { Col, Divider, Row, Typography } from 'antd'
const {Title, Paragraph} = Typography


const index = () =>{
    return (
        <div className='py-80 px-30'>
            <Row span={18}>
                <Row justify='center'>
                    <Col span={12}>
                        <Title level={2} className="fw-4">Tarion New Home Warranty Program</Title>
                        <Divider className='bg-ab'/>
                        <Title level={4} className="fs-20 lh-1_45 c-33">
                            One Year Warranty Protection
                        </Title>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            The program warrants that the home is free from defects in materials and workmanship, is fit to live in, and meets the Ontario Building Code requirements for one year from the date that the purchaser was entitled to occupy.
                        </Paragraph>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            Homeowners are responsible for notifying both the builder and Tarion New Home Warranty program in writing of any defects before the end of the first year. If Tarion does not receive notice in writing within the warranty period, the claim might not be allowed. Coverage takes effect from the date of closing.
                        </Paragraph>
                        <Title level={4} className="fs-20 lh-1_45 c-33">
                            Two Year Warranty Protection
                        </Title>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            The Builder warrants for two years that there is no:
                        </Paragraph>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            <ul>
                                <li>
                                    Water seepage through the basement or foundation walls (in condominiums, this protection includes all below-ground areas such as parking garages)
                                </li>
                                <li>
                                    Defects in materials and work including caulking, windows and doors so that the building envelope prevents water penetration
                                </li>
                                <li>
                                    Defects in materials and work in the electrical, plumbing and heating delivery and distribution systems
                                </li>
                                <li>
                                    Defects in materials and work which result in the detachment, displacement or deterioration of exterior cladding
                                </li>
                                <li>
                                    Violations of the Ontario Building Code health and safety provisions
                                </li>
                            </ul>
                        </Paragraph>
                        <Title level={4} className="fs-20 lh-1_45 c-33">
                            Seven Year Warranty Protection
                        </Title>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            The builder warrants for seven years that there are no major structural defects; a major structural defect is defined in the Ontario New Home Warranties Plan Act as any defect in materials or work that results in the failure of a load-bearing part of the home structure, or any defect in materials or work that significantly and adversely affects the use of the building as a home.
                        </Paragraph>
                    </Col>
                    <Col span={12}>
                        <Title level={2} className="fw-4">Our Two (2) Year Renovation Warranty</Title>
                        <Divider className='bg-ab'/>
                        <Title level={4} className="fs-20 lh-1_45 c-33">
                            What Is Covered?
                        </Title>
                        <Paragraph className='mb-20 fs-13 c-74 lh-1'>
                            <CheckOutlined className="fs-13 c-33"/> provide balance, uniformity and standardization for bidding and contracting procedures.
                            <br/>
                            <CheckOutlined className="fs-13 c-33"/> 
                                Fit for habitation.
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/> 
                                Constructed in accordance with the provincial Building Code.
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/>
                                Defects in materials, including windows, doors, and caulking or defects in work that result in water penetration into the building envelope. 
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/> 
                                Defects in work and materials in the electrical, plumbing and heating delivery and distribution systems.
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/>
                                Defects in work or materials which result in the detachment, displacement, or deterioration of exterior cladding (such as brickwork, aluminum, or vinyl siding).
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/> 
                                Violations of the provincial Building Code affecting health and safety (including, but not limited to, violations relating to fire safety and the structural adequacy of the home).
                        </Paragraph>
                        <Title level={4} className="fs-20 lh-1_45 c-33">
                            What Is Not Covered?
                        </Title>
                        <Paragraph className='mb-20 fs-13 c-74 lh-1'>
                            <CheckOutlined className="fs-13 c-33"/> Damage resulting from improper maintenance such as dampness or condensation caused by the homeowners’ failure to maintain proper ventilation levels or improper operation of a humidifier, hot tub or other moisture-producing device.
                            <br/>
                            <CheckOutlined className="fs-13 c-33"/> 
                                Alterations, deletions or additions made by the homeowner.
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/> 
                                Defects in materials, design and work supplied or installed by the homeowner.
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/>
                                Damage caused by the homeowner or visitors.
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/> 
                                Normal Wear and Tear – scruffs, tears, scratches, normal shrinkage of materials.
                                <br/>
                            <CheckOutlined className="fs-13 c-33"/>
                                Third party damages – from municipal services, acts of god, vandalism, damage from insects or rodents.
                                <br/>
                        </Paragraph>
                    </Col>
                </Row>                
            </Row>
        </div>
    )
}

export default index
