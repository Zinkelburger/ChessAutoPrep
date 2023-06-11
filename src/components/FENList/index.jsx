import React from 'react';

function FENList({ fens }) {
  return (
    <>
      <h2>FENs</h2>
      <ul>
        {fens.map((fen, index) => (
          <li key={index}>{fen}</li>
        ))}
      </ul>
    </>
  );
}

export default FENList;
