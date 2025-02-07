import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate';


export default ()=>{

   const [posts,setPosts]=useState({});

   const fetchPosts = async()=>{
         const res = await axios.get('http://localhost:4000/posts');
         // we are retreiving data from the server and storing it in the state
         setPosts(res.data);
   }
    
    useEffect(()=>{
            fetchPosts();
    },[]);
    
    console.log(posts);

    const renderedPosts = Object.values(posts).map(post=>{ 
        return (
            <div className="card" style={{width:'30%', marginBottom:'20px' , backgroundColor:'#c4bcb3'}} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentCreate/>
                </div>
            </div>
        )
    })

    return (
        <div style={{backgroundColor:'#343026', borderRadius:'10px', padding:'20px'}}>
           <h1 style={{color:"#ffffff", marginBottom:'20px'}}>Posts</h1>
              <div className="d-flex flex-row flex-wrap justify-content-between">
                {renderedPosts}
                </div>
        </div>
    )
}