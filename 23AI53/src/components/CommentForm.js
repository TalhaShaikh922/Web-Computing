import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add Comment" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default CommentForm;
