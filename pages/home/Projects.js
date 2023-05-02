import React from 'react'
import { Typography } from 'antd';
import ProjectsPreview from '../../Component/Core/ProjectsPreview'
import GMap from '../../Component/Core/GMap';

const { Title } = Typography;


const Projects = () => {
  return (
    <div className="pt-50 bgc-white">
      <div className='txt-center'>
        <Title level={1} className="service-title c-blackish ">SOME OF <span>OUR</span> WORKS</Title>
      </div>
      <ProjectsPreview home={true}/>
      <div className='mt-25'>
        <GMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC3te5IVkEUMgEcDH6d5l1ofxmsq3oUnVU&#038;language=en&#038;ver=1`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `275px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default Projects
