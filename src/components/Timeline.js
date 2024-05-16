import React from 'react';
import './Timeline.css';

const Event = ({ event }) => (
  <div className={`timeline-event ${event.id % 2 === 0 ? 'left' : 'right'}`}>
    <div className="timeline-date">{event.date}</div>
    <div className="timeline-content">
      <h3>{event.title}</h3>
      <ul>
        {event.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);
const Timeline = () => {
  const events = [
    {
      id: 1,
      date: 'January 2024',
      title: 'Second Semester',
      description: [
        'Second Semester at SUSS.',
        'Modules Taken:',
        'ANL551: Data Analytics for Decision Makers',
        'ANL555: Data Integration for Enterprise Automation',
        'ANL557: Applied Forecasting'
      ]
    },
    {
      id: 2,
      date: 'August 2023',
      title: 'Started Master\'s Degree',
      description: [
        'Began my Masters degree at Singapore University of Social Sciences (SUSS).',
        'Modules Taken:',
        'ANL 501: Data Visualisation and Storytelling',
        'ANL 503: Data Wrangling',
        'ANL 505: Hyperautomation',
        'ANL 553: Applied Statistical Methods'
      ]
    }
  ];

  return (
    <div className="timeline">
      {events.map(event => <Event key={event.id} event={event} />)}
    </div>
  );
};

export default Timeline;