import React from 'react';
import './style.css';

function About() {
  console.log('About page rendered');
  return (
    <div className='aboutPageStyle'>
      <h1>About</h1>
      <p>
        Balls balls balls.
      </p>
      <p>
        Balls balls balls.
      </p>
      <p>
        Thank you for visiting this site and I hope it is useful to you!
      </p>
    </div>
  );
}

export default About;