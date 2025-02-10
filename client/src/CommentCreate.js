import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
      setContent('');  // Clear the input field after submission
    } catch (error) {
      console.error('Error creating comment', error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input 
            type="text" 
            className="form-control" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          />
        </div>
        <button 
          className="btn" 
          style={{ color: '#ffffff', backgroundColor: '#000000', marginTop: '20px', textAlign: 'center', justifyContent: 'center' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
