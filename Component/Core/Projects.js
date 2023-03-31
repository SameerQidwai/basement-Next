import { Col, Row, Tabs, Typography, Image } from 'antd';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from '../../Component/useFunction';
const { Title, Text } = Typography;
const {TabPane} = Tabs
const imagesINPublic = [
    { name: 'images', type: 'something', img: ' 29-1133.jpg' },
    { name: 'images', type: 'something', img: ' 244125289.jpg' },
    { name: 'images', type: 'something', img: ' basement1.jpg' },
    { name: 'images', type: 'something', img: ' basement1.jpg' },
    { name: 'images', type: 'something', img: ' basement3.jpg' },
    { name: 'images', type: 'something', img: ' basement4.jpg' },
    { name: 'images', type: 'something', img: ' basement5.jpg' },
    {
      name: 'images',
      type: 'something',
      img: ' basement-renovation-into-pic.png',
    },
    { name: 'images', type: 'something', img: ' cover1.jpg' },
    { name: 'images', type: 'something', img: ' cover2.jpg' },
    { name: 'images', type: 'something', img: ' cover3.jpg' },
    { name: 'images', type: 'something', img: ' cover4.jpg' },
    { name: 'images', type: 'something', img: ' cover5.jpg' },
    { name: 'images', type: 'something', img: ' cover6.jpg' },
    { name: 'images', type: 'something', img: ' FP-92873F.jpg' },
    { name: 'images', type: 'something', img: ' HD-Resurrection.jpg' },
    { name: 'images', type: 'something', img: ' home-parallax.webp' },
    { name: 'images', type: 'something', img: ' Low-FP-92873F.jpg' },
    { name: 'images', type: 'something', img: ' process-background.jpeg' },
  ];
  

const ProjectsPreview = () => {
  const [images, setImagesName] = useState([...imagesINPublic]);

//   useEffect(() => {
//     first
  
//   }, [])
  

  const Image_Column = () => {
    return (
      <Row gutter={[30, 30]}>
        <Image.PreviewGroup>
            {(images ?? []).map(({ img, type, name }, index) => (
            <Col xs={12} sm={8} md={4} lg={3} key={index}>
                    <Image src={img} width="100%"  />
            </Col>
            ))}
        </Image.PreviewGroup>
      </Row>
    );
  };
  
  const tabChange = (key) =>{
    setImagesName([...imagesINPublic])
  }

  return (
    <Row justify="center">
      <Col span={23}>
        <Tabs type="card" animated centered destroyInactiveTabPane onChange={tabChange}>
          <TabPane tab="ALL" key="all">{Image_Column()}</TabPane>
          <TabPane tab="BASEMENT CONSTRUCTION" key="basement">{Image_Column()}</TabPane>
          <TabPane tab="KITCHEN" key="kitchen">{Image_Column()}</TabPane>
          <TabPane tab="BATHROOM" key="bathroom">{Image_Column()}</TabPane>
          <TabPane tab="HOME IMPROVEMENTS" key="home_improvments">{Image_Column()}</TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ProjectsPreview;
