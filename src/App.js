// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Academics from './components/Academics';

const App = () => {
  const projectsData = [
    {
      title: 'Forecasting Temperatures in Singapore with R',
      description: 'This is an R project.',
      category: 'R',
      image: '/pages_test/Images/Forecasting Project card.png',
    },
    {
      title: 'Identifying High Value HDB Flats with SPSS & Tableau',
      description: 'This is an SPSS project.',
      category: 'SPSS',
      image: '/pages_test/Images/SPSS Project HDB card.jpg'
    },
    {
      title: 'Data Consolidation & Transformation with Python',
      description: 'This is a Python project.',
      category: 'Python', // New project for the Python filter
      image: '/pages_test/Images/Python Consolidation card.jpg',
    },
    {
      title: 'Visualising Singaporean Attitudes towards the US and China',
      description: 'This is an R project.',
      category: 'R', // New project for the R filter
      image: '/pages_test/Images/Visualisation Project card.png'
    },
    {
      title: 'SAS Data Science AIML Program Final Project',
      description: ''  ,
      category: 'SAS', 
      image: '/pages_test/Images/SAS Project Card.jpg'
    },
    {
      title: 'Work in Progress',
      description: ''  ,
      category: 'Others', 
      image: '/pages_test/Images/WIP placeholder.jpg'
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="projects" className="projects">
                <Projects projectsData={projectsData} />
              </section>
            </>
          }
        />
        <Route
          path="/project/:title"
          element={<ProjectDetail projectsData={projectsData} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/academics"
          element={<Academics />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        {/* Add more routes as needed */}
      </Routes>
      
    </div>
  );
};

export default App;