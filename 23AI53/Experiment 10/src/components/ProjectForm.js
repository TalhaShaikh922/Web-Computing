import React, { useState } from 'react';

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ title, description, comments: [] });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container">
      <div className="project-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Project Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required
          />
          <textarea 
            placeholder="Project Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
          />
          <button type="submit">Submit Project</button>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
