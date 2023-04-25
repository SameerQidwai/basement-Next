import { Typography } from 'antd'
import React from 'react'
import ProjectsPreview from '../../Component/Core/ProjectsPreview'
import { useRouter } from 'next/router'
const {Title} = Typography

const index = () =>{
  const router = useRouter();
  const { key } = router.query;
  return (
      // <div className="mb-30">
      //     <ProjectsPreview/>
      // </div>
      <div className="pt-50 pb-25 bgc-white">
        <div className="txt-center">
          <Title level={3} className="service-title c-blackish ">
            <span>OUR</span> PROJECTS
          </Title>
        </div>
        <ProjectsPreview tabKey={key}/>
      </div>
    );
}

export default index
