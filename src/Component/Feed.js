import React  from 'react'
import './Feed.css'
import StoryCover from './StoryCover'
import MessageSender from './MessageSender'
import Post from './Post'
const Feed =()=>{
    return(
       <div className="feed">
           <StoryCover/>
           <MessageSender/>
           <Post 
           profile=""
           message="Crazy Faith"
           username="genteel"
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2g73mJBDsSYZfOjO4bu3JrxpX81zuLhGTNg&usqp=CAU"
           timestamp="un heure"
           />

<Post 
           profile=""
           message="Crazy Faith"
           username="genteel"
           image="data:image/jpeg;base64,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"
           timestamp="un heure"
           />
       </div> 
    )
}
export default Feed;