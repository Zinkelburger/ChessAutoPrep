import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ChessDisplay from "../../components/ChessDisplay";
import "./style.css";

function Submit() {
  const [searchParams] = useSearchParams();
  const fens = searchParams.has('fens')
    ? JSON.parse(searchParams.get('fens'))
    : ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'];
  const email = searchParams.get('email') || '';

  return (
    <div className='submitPageStyle'>
      <div className='innerSubmitPageStyle'>
        <h1> Manual Entry </h1>
        <p> Enter your email and the FENs you would like to track (max of 50 FENs) </p>
        <br />
        <ChessDisplay fens={fens} email={email} />
      </div>
    </div>
  );
}

export default Submit;
