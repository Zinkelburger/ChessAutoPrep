import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { useNavigate } from 'react-router-dom';


function isValidFen(fen) {
    try {
      new Chess(fen);
      return true;
    } catch (e) {
      return false;
    }
  }

function EmailForm({ fens, onSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validFens = fens.filter(isValidFen);
    fetch('/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, fens: validFens })
    }).then(() => {
      console.log('Data saved!');
      onSuccess();
      navigate('/success');
    });
  };  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default EmailForm;
