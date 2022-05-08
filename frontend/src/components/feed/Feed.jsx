import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
import { useState, useEffect } from 'react'
export default function Feed({username}) {
  const [posts, setPosts]= useState([]);
  const usr='62713f9f9ed310e8fdc8713e';
  useEffect(() => {
    const fetchPosts = async ()=>{
        
        const res = username
        ?await axios.get(`posts/profile/?userId=${username}`)
        :await axios.get(`posts/timeline/${usr}`);
        setPosts(res.data.sort((p1, p2)=>{
          return new Date(p2.createdAt)- new Date(p1.createdAt)
        }))
    };
    fetchPosts();
  },[username]);
  return (
    <div className="feed" >
      <div className="feed-wrapper">
        <Share/>
        {posts.map(
          p=> <Post key={p._id} post={p}/>
        )}
      </div>
    </div>
  )
}
