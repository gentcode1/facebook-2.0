import React, {
    useState, useEffect
} from 'react'
import './Feed.css'
import StoryCover from './StoryCover'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
import {useStateValue} from './StateProvider'
const Feed =()=>{
    const [{user}, dispatch] = useStateValue();
    const[posts, setPosts] =useState([]);
  useEffect(()=>{
      db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot)=>setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data() }))
          
      ));
  },[])
    return(
       <div className="feed">
           <StoryCover/>
           <MessageSender/>
           {posts.map((post)=>(
               <Post 
               key={post.data.id}
           profile={post.data.profile}
           message={post.data.message}
           username={post.data.username}
           image={post.data.image}
           timestamp={post.data.timestamp}
         />

           ))}
           


       </div> 
    )
}
export default Feed;
