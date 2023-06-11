import React from 'react';
import './style.css';

function About() {
  return (
    <div className='aboutPageContainer'>
      <div className='aboutPageStyle'>
        <h1>About</h1>
        <p>
          Input the FENs and your email. You can input a maximum of 50 FENs.
        </p>
        <p>
          Once you click submit, these FENs are stored in a text file. The text file is scanned once a week. Any games in the TWIC database matching these FENs will be emailed to you.
        </p>
        <p>
          Thank you for visiting this site and I hope it is useful to you!
        </p>
      </div>
    </div>
  );
}

export default About;
