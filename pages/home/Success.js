import React, {useRef, useEffect} from 'react'
import SuccessCounter from '../../Component/Core/SuccessCounter'
import { useIntersection, useWindowDimensions } from '../../Component/useFunction'

const Success = () => {
    const ref = useRef()
    const {height, width} = useWindowDimensions()
    let inViewport = useIntersection(ref, '-100px'); // Trigger as soon as the element becomes visible    

    return (
        <div>
            
            <div
                className="counter-main"
                style={{
                    backgroundImage: 'url(Background.svg)',
                }}
                ref={ref}
            >  
            <div className="counter-curve-up"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    width="100%" 
                    height="100" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    className="counter-svg"
                    // fill="rgba(255, 0, 0, 1)"
                    fill="rgba(255,255,255,1)"
                >
                    <path d="M0 0 C50 180 100 0 100 0 Z" ></path>
                </svg>
            </div>
                {!inViewport &&<SuccessCounter  />}
                {inViewport &&<SuccessCounter inViewport={true} />}
                <div className="counter-curve-bottom"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    width="100%" 
                    height="100" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    className="counter-svg"
                    
                    // fill="rgb(141 139 139), ">
                    fill="rgba(255,255,255,1)">
                        <path  d="M0 100 C50 0 50 0 100 100 Z"></path>
                </svg>
            </div>
            </div>
           
        </div>
    )
}


export default Success