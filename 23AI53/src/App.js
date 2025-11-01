import React, { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const addComment = (title, comment) => {
    setProjects(projects.map(p => 
      p.title === title ? {...p, comments: [...p.comments, comment]} : p
    ));
  };

  return (
    <div>
      <Header />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects} addComment={addComment} />
    </div>
  );
}

export default App;
