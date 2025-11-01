import React from 'react';
import CommentForm from './CommentForm';

function ProjectItem({ project, addComment }) {
  return (
    <div className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="comments-section">
        <h4>Comments:</h4>
        {project.comments.length === 0 && <p className="no-comments">No comments yet.</p>}
        {project.comments.map((c, index) => (
          <div key={index} className="comment-item">{c}</div>
        ))}
        <div className="comment-form">
          <CommentForm addComment={(comment) => addComment(project.title, comment)} />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
