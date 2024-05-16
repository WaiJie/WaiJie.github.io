import React from 'react';

// Create a new component for the education section
function Education() {
  return (
    <div>
      <h3>Education</h3>
      <p>Pursuing a Master's in Analytics and Visualization from Singapore University of Social Sciences</p>
      <p>Bachelor of Engineering in Materials Engineering with Honours (Distinction) from Nanyang Technological University</p>
    </div>
  );
}

// Create a new component for the skills section
function Skills() {
  return (
    <div>
      <h3>Skills</h3>
      <ul>
        <li>SAS</li>
        <li>SQL</li>
        <li>Python</li>
        <li>R</li>
        <li>Tableau</li>
      </ul>
    </div>
  );
}

// Create a new component for the experience highlights section
function ExperienceHighlights() {
  return (
    <div>
      <h3>Experience Highlights</h3>
      <p>Served as an Analyst and SAS Developer at NCS Pte Ltd, where I provided critical support for data integration processes, troubleshooting ETL issues, and ensuring data accuracy.</p>
      <p>Applied SAS programming skills to identify and rectify data discrepancies, optimize ETL workflows, and improve data quality.</p>
      <p>Collaborated with cross-functional teams to understand requirements, diagnose data issues, and implement effective solutions.</p>
      <p>Resolved user queries related to SAS Visual Analytics reports and documented troubleshooting procedures for knowledge sharing.</p>
      <p>During the SAS AIML Program, I contributed to resolving technical issues with SAS code, conducted thorough testing, and enhanced SAS code for user behaviour extraction from SAS Visual Analytics report logs.</p>
    </div>
  );
}

// Create a new component for the certifications section
function Certifications() {
  return (
    <div>
      <h3>Certifications</h3>
      <ul>
        <li>SAS Certified Specialist: Base Programming Using SAS 9.4</li>
        <li>SAS Certified Specialist: Visual Business Analytics Using SAS Viya</li>
        <li>SAS Certified Specialist: Machine Learning Using SAS Viya 3.5</li>
        <li>Programming for SAS Viya</li>
        <li>Statistics 1: Introduction to ANOVA, Regression, and Logistic Regression</li>
        <li>SAS Macro Language 1: Essentials</li>
        <li>SAS SQL 1: Essentials</li>
        <li>Data Science Bootcamp by Vertical Institute</li>
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h3>Experience</h3>
      <ul>
        <li>Analyst / SAS developer at NCS Pte Ltd	(April 2023 – March 2024)</li>
        <li>SAS AIML Program – Data Analyst at SAS Institute Pte Ltd (June 2022 - March 2023)</li>
        <li>Process Engineer at ASM pacific technology 	(February 2021 - June 2021)</li>
        <li>Process Engineer at STMicroelectronics (August 2020 - February 2021)</li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div>
        <Education />
        <Skills />
        <ExperienceHighlights />
        <Experience />
        <Certifications />
      </div>
    </section>
  );
}

export default About;