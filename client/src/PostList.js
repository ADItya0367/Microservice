import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:4000/posts');
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      alert('Failed to fetch posts. Please check the console for more details.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div className="card" style={{ width: '30%', marginBottom: '20px', backgroundColor: '#c4bcb3' }} key={post.id}>
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return (
    <div style={{ backgroundColor: '#343026', borderRadius: '10px', padding: '20px' }}>
      <h1 style={{ color: '#ffffff', marginBottom: '20px' }}>Posts</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>
      )}
    </div>
  );
};

export default PostList;
