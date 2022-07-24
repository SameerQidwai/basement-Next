import React from 'react'
import GetInContact from '../../Component/Core/GetInContact'
import Planning from './Planning'
import Renovation from './Renovation'


const index = () =>{
    return (
        <div className="mb-30">
            <Planning/>
            <Renovation/>
            <GetInContact/>
        </div>
    )
}

export default index
