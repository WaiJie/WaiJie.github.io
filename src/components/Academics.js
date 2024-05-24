import React from 'react';

// Create a new component for the education section
function Modules() {
  return (
    <div>
      <h3>August 2023 Semester</h3>
      <p>ANL 501: Data Visualisation and Storytelling</p>
      <p>ANL 503: Data Wrangling</p>
      <p>ANL 505: Hyperautomation</p>
      <p>ANL 553: Applied Statistical Methods</p>
      <p>Semester GPA: 4.75 / 5.00 </p>
      <p><br/></p>
      <h3>January 2024 Semester</h3>
      <p>ANL551: Data Analytics for Decision Makers</p>
      <p>ANL555: Data Integration for Enterprise Automation</p>
      <p>ANL557: Applied Forecasting</p>
      <p>Semester GPA: 4.83/ 5.00 </p>
      <p>CGPA: 4.79/ 5.00 </p>
      <p><br/></p>
      <p>
        <a href="https://www.suss.edu.sg/programmes/detail/mavi" target="_blank" rel="noopener noreferrer">
          For Details on the modules, visit the SUSS MAVI website.
        </a>
      </p>
    </div>
  );
}

function Academics() {
  return (
    <section id="academics" className="academics">
      <h2>Modules Taken</h2>
      <div>
        <Modules />
      </div>
    </section>
  );
}

export default Academics;