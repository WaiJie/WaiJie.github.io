import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ projectsData }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p>Filter projects by category:</p>
      <div className="filter-buttons">
        <button onClick={() => handleFilterClick('All')}>All</button>
        <button onClick={() => handleFilterClick('Python')}>Python</button>
        <button onClick={() => handleFilterClick('R')}>R</button>
        <button onClick={() => handleFilterClick('SAS')}>SAS</button>
        <button onClick={() => handleFilterClick('SPSS')}>SPSS</button>
        <button onClick={() => handleFilterClick('Others')}>Others</button>
        {/* Add more filter buttons as needed */}
      </div>

      <div className="project-grid">
        {projectsData
          .filter((project) => activeFilter === 'All' || project.category === activeFilter)
          .map((project, index) => (
            <div key={index} className="project-box">
              <Link
                to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="project-box-link"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-box-text">{project.title}</div>
              </Link>
            </div>
          ))}
      </div>
      <p><br></br></p>
      <p style={{ fontSize: 'smaller' }}>The images above are generated using Gemini AI.</p>
    </section>
  );
};

export default Projects;