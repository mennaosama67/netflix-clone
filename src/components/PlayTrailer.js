import React from 'react'

import video from '../images/Netflix Intro (1080p) (Download).mp4'
import './PlayTrailer.css'
function PlayTrailer({showVideo}) {
  return (
      showVideo&&
   ( <div className="video__container"  style={{display:showVideo ? 'block' : 'none' }}>
    <video  autoPlay>
     <source src={video} type="video/mp4"/>
    </video>
    
    </div>)
  )
}

export default PlayTrailer