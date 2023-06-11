import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import FENList from '../../components/FENList';
import "./style.css";

function GenerateFENs() {
  const [username, setUsername] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [timeControl, setTimeControl] = useState('');
  const [fens, setFens] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    downloadGames(username, year, month, timeControl)
      .then(games => {
        const fens = traverseGames(games);
        setFens(fens);
      });
  }

  function handleExport() {
    const url = new URL('/submit', window.location.origin);
    url.searchParams.append('fens', JSON.stringify(fens));
    navigate(url.pathname + url.search);
  }

  return (
    <div className='mainElement'>
      <h1>Generate FENs</h1>
      <form onSubmit={handleSubmit}>
        <UserForm
          username={username}
          year={year}
          month={month}
          timeControl={timeControl}
          onUsernameChange={setUsername}
          onYearChange={setYear}
          onMonthChange={setMonth}
          onTimeControlChange={setTimeControl}
        />
        <br />
        <input type="submit" value="Download Games" />
      </form>
      {fens.length > 0 && (
        <>
          <FENList fens={fens} />
          <button onClick={handleExport}>Export to Submission Page</button>
        </>
      )}
    </div>
  );
}

function downloadGames(username, year, month, timeControl) {
  return fetch(`https://api.chess.com/pub/player/${username}/games/${year}/${month}`)
    .then(response => response.json())
    .then(data => data.games.filter(game => game.time_control === timeControl));
}

function traverseGames(games) {
  // TODO: Implement this function to traverse the tree of games
  // and return an array of FENs of all positions reached with a
  // frequency of at least 1%.
  return [];
}

export default GenerateFENs;
