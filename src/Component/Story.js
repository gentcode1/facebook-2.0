import React from 'react';
import './Story.css'
import {Avatar} from '@material-ui/core'
const Story =({image, profile, title})=>{
return(
  <div style={{backgroundImage: `url(${image})`}}  className="story" >
 <Avatar src={profile}   className="story__avatar"/>
 <h4>{title}</h4>
  </div>  
)
}
export default Story