
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CommentList = ({ postId }) => {

  const[Comments, setComments] = useState({});

  const fetchComments = async () => {
      const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
      setComments(res.data);
      
  };

  useEffect(() => {
    fetchComments();
  }, []);


  const renderedComments = Object.values(Comments).map((comment) => {
     // checking various conditions
    let content;
    if(comment.status === 'approved'){
        content = comment.content;
    }
    if(comment.status === 'pending'){
        content = 'This comment is awaiting moderation';
    }
    if(comment.status === 'rejected'){
        content = 'This comment has been rejected';
    }
   return <li key={comment.id}>{content}</li>
});
  
  return <ul>{renderedComments}</ul>;
};

export default CommentList;
