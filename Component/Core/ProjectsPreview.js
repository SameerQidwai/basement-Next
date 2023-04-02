import { RightCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tabs, Typography, Image, Button } from 'antd';
import NextImage from "next/image";
import { useEffect, useState } from 'react';
const { Title, Text } = Typography;
const { TabPane } = Tabs;
const imagesINPublic = [
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM- 11",
  "type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM -11.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-10","type":["basement"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-10.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-12","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-12.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-13","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-13.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-14","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-14.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-15","type":["basement"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-15.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-16","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-16.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-17","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-17.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-18","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-18.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-19","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-19.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-2","type":["basement"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-2.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-20","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-20.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-21","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-21.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-22","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-22.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-23","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-23.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-24","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-24.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-25","type":["basement"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-25.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-26","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-26.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-27","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-27.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-28","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-28.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-29","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-29.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-3","type":["basement"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-3.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-4","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-4.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-5","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-5.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-6","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-6.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-7","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-7.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-8","type":["basement"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-8.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-9","type":["kitchen"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM-9.jpg"},
  {"name":"BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM","type":["home"],"img":"/images/BASEMENT-KITCHEN-RENOVATION-REMODELING-BATHROOM.jpg"},
  ] ;

const ProjectsPreview = ({ home = false }) => {
  const [images, setImagesName] = useState(
    home ? [...imagesINPublic.slice(0, 5)] : [...imagesINPublic]
  );

  const Image_Column = () => {
    return (
      <Row gutter={[30, 30]}>
        <Image.PreviewGroup>
          {(images ?? []).map(({ img, type, name }, index) => (
            <Col xs={12} sm={6} md={8} lg={8} key={index}>
              <Image src={img} width="100%" placeholder={<div>{name}</div>} />
            </Col>
          ))}
        </Image.PreviewGroup>
        {home && (
          <Col xs={12} sm={6} md={8} lg={8}>
            <NextImage src="/blur-show-more-project.jpg" alt='blur-show-more-project' layout='fill'/>
              <Button type="text" block className="c-blackish button-overlay">
                <a href="/our-projects">SHOW MORE <RightCircleOutlined /></a>
            </Button>
          </Col>
        )}
      </Row>
    );
  };

  const tabChange = (key) => {
    let newObj = []
    if(key!== 'all'){
      imagesINPublic.map((el)=> {
        if (el.type.includes(key)){
          newObj.push(el)
        }
      })
    }else{
      newObj =[...imagesINPublic]
    }
    setImagesName(
      home ? [...imagesINPublic.slice(0, 5)] : [...newObj]
    );
  };


  return (
    <Row justify="center">
      <Col span={23}>
        <Tabs
          type="card"
          animated
          centered
          destroyInactiveTabPane
          onChange={tabChange}
        >
          <TabPane tab="ALL" key="all">
            {Image_Column()}
          </TabPane>
          <TabPane tab="BASEMENT CONSTRUCTION" key="basement">
            {Image_Column()}
          </TabPane>
          <TabPane tab="KITCHEN" key="kitchen">
            {Image_Column()}
          </TabPane>
          <TabPane tab="BATHROOM" key="bathroom">
            {Image_Column()}
          </TabPane>
          <TabPane tab="HOME IMPROVEMENTS" key="home">
            {Image_Column()}
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ProjectsPreview;
