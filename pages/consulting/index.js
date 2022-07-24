import React from 'react'
import GetInContact from '../../Component/Core/GetInContact'
import Planning from './Planning'
import PlanOverview from './PlanOverview'


const index = () =>{
    return (
        <div className="mb-30">
            <Planning/>
            <PlanOverview/>
            <GetInContact />
        </div>
    )
}

export default index
