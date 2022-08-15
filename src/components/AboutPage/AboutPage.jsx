import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">

        <p>Technolgies Used:
          <ul>
            <li>React</li>
            <li>Redux-Sagas</li>
            <li>PostgreSQL</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>3js</li>
            <li>Material UI</li>
          </ul>
        </p>
        <p>
          Thank you to:
          <ul>
            <li>The Jemisin Cohort</li>
            <li>Liz</li>
            <li>Friends and Family</li>
            
          </ul>
        </p>
    </div>
  );
}

export default AboutPage;
