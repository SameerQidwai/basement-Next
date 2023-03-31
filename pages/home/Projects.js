import React from 'react'
import { Typography } from 'antd';
import ProjectsPreview from '../../Component/Core/ProjectsPreview'

const { Title } = Typography;

const Projects = () => {
  return (
    <div className="mt-50 mb-25 bgc-white">
      <div className='txt-center'>
        <Title level={1}>OUR PROJECTS</Title>
      </div>
      <ProjectsPreview />
    </div>
  );
};

export default Projects
