import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects, addComment }) {
  return (
    <div className="container">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} addComment={addComment} />
      ))}
    </div>
  );
}

export default ProjectList;
