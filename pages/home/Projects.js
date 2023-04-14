import React from 'react'
import { Typography } from 'antd';
import ProjectsPreview from '../../Component/Core/ProjectsPreview'

const { Title } = Typography;

const Projects = () => {
  return (
    <div className="pt-50 pb-25 bgc-white">
      <div className='txt-center'>
        <Title level={3} className="service-title c-blackish ">SOME OF <span>OUR</span> WORKS</Title>
      </div>
      <ProjectsPreview home={true}/>
    </div>
  );
};

export default Projects
