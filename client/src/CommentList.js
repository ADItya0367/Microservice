
import React from 'react';

const CommentList = ({ Comments }) => {

  const renderedComments = Object.values(Comments).map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
