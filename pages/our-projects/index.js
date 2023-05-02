import { Typography } from 'antd'
import React from 'react'
import ProjectsPreview from '../../Component/Core/ProjectsPreview'
import GMap from '../../Component/Core/GMap'

const {Title} = Typography

const index = () =>{
  return (
      // <div className="mb-30">
      //     <ProjectsPreview/>
      // </div>
      <div className="pt-50 bgc-white">
        <div className="txt-center">
          <Title level={1} className="service-title c-blackish ">
            <span>OUR</span> PROJECTS
          </Title>
        </div>
        <ProjectsPreview />
        <div className='mt-25'>
        <GMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC3te5IVkEUMgEcDH6d5l1ofxmsq3oUnVU&#038;language=en&#038;ver=3`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `275px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      </div>
    );
}

export default index
