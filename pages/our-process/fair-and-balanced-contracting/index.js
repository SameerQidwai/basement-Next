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
                    <Col span={24}>
                        <Title level={2}>Fair & Balanced Contracting To Protect Everyone</Title>
                        <Divider className='bg-ab'/>
                        <Title level={3} className="fw-3 fs-32 lh-1_45 c-33">
                            Canadian Construction Documents Committee (CCDC)
                        </Title>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            We use CCDC document contracts to protect you, your home and your investment. These contracts are developed through a collaborative and consensus-based approach that protects the interest and preserves the rights of all parties involved in a construction project.
                        </Paragraph>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            At Renowise, our main goal is to protect home owners and potential buyers. We realize that starting a new project to build or renew your house involves investing a significant amount of money. CCDC documents protect you towards unpleasant surprises, additional costs and guarantee you the quality of the services you will pay for. Through CCDC documents, Renowise will protect you, your home and your investment.
                        </Paragraph>
                        <Title level={4} className="my-20 fw-3 fs-20 lh-1_45 c-33">
                            Benefits of CCDC documents
                        </Title>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            CDC documents are used in contractual arrangements across the Canadian construction industry. They provide cost savings through balanced standard contract forms, and help to ensure standardization for bidding and contracting procedures. Each year, more than 50,000 copies of CCDC documents are sold.
                        </Paragraph>
                        <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                            By using uniformed and standardized documents from CCDC, practitioners in the Canadian construction industry are using documents that are:
                        </Paragraph>
                        <Paragraph className='fs-14 c-74 lh-2_27'>
                            <CheckOutlined className='c-33 fs-14'/> relied upon as familiar industry standards
                        </Paragraph>
                        <Paragraph className='fs-14 c-74 lh-2_27'>
                            <CheckOutlined className='c-33 fs-14'/>  developed through a collaborative and consensus-based approach that allows  for the serious consideration of rights, interests and obligations of all parties
                        </Paragraph>
                        <Paragraph className='fs-14 c-74 lh-2_27'>
                            <CheckOutlined className='c-33 fs-14'/> protect the interest and preserve the rights of all parties involved in a  construction project, and
                        </Paragraph>
                        <Paragraph className='fs-14 c-74 lh-2_27'>
                            <CheckOutlined className='c-33 fs-14'/> provide balance, uniformity and standardization for bidding and contracting procedures.
                        </Paragraph>
                        <Paragraph className='fs-15 c-74 lh-2_27'>
                            CCDC documents can help reduce claims and disputes, and the added expense and time associated.  For more information regarding CCDC documents and best practice please visit their website <a>here.</a>
                        </Paragraph>
                    </Col>
                </Row>                
            </Row>
        </div>
    )
}

export default index
