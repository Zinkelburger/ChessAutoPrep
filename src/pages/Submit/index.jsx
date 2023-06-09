import React from 'react';
import ChessDisplay from "../../components/ChessDisplay";

function Submit() {
  console.log('Submit page rendered');
  return (
    <div className='submitPageStyle'>
      <ChessDisplay />
    </div>
  );
}

export default Submit;