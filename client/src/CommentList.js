import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = (props) => {
 const   { postId } = props;
  const [comments, setComments] = useState([]);

  // fetching our data
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
      setComments(res.data);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId]);
  // re render the component when the postId changes

  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
