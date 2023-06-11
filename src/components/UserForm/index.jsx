import React from 'react';
import "./style.css";

function UserForm({ username, year, month, timeControl, onUsernameChange, onYearChange, onMonthChange, onTimeControlChange }) {
  function handleUsernameChange(event) {
    onUsernameChange(event.target.value);
  }

  function handleYearChange(event) {
    onYearChange(event.target.value);
  }

  function handleMonthChange(event) {
    onMonthChange(event.target.value);
  }

  function handleTimeControlChange(event) {
    onTimeControlChange(event.target.value);
  }

  return (
    <div className="form-style">
      <div className="input-wrapper">
        <label>
          Username:&nbsp;
        </label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <br/>
      <div className="input-wrapper">
        <label>
          Year:&nbsp;
        </label>
        <input type="text" value={year} onChange={handleYearChange} />
      </div>
      <br/>
      <div className="input-wrapper">
        <label>
          Month:&nbsp;
        </label>
        <input type="text" value={month} onChange={handleMonthChange} />
      </div>
      <br/>
      <div className="input-wrapper">
        <label>
          Time Control:&nbsp;
        </label>
        <input type="text" value={timeControl} onChange={handleTimeControlChange} />
      </div>
    </div>
  );
}

export default UserForm;
