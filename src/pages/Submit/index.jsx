import React from 'react';
import ChessDisplay from "../../components/ChessDisplay";
import "./style.css";

function Submit() {
  console.log('Submit page rendered');
  return (
    <div className='submitPageStyle'>
      <h1> Manual Entry </h1>
      <p> Enter your email and the FENs you would like to track (max of 50 FENs) </p>
      <br></br>
      <ChessDisplay />
    </div>
  );
}

export default Submit;