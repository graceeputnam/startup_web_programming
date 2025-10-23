import React, { useState } from 'react';

import { GameEvent, GameNotifier } from './gameNotifier';
import './rateGame.css';


export function RateGame(props) {
  const userName = props.userName;
  const [showName, setShowName] = useState('');
  const [rating, setRating] = useState(null);

  const handleShowInput = (e) => setShowName(e.target.value);

  const handleRatingChange = (e) => setRating(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newScore = {
    show: showName,
    name: userName,
    score: rating,
    date: new Date().toLocaleString()
  };

  // Read existing ratings from localStorage
  const scoresText = localStorage.getItem('scores');
  let scores = [];
  if (scoresText) {
    scores = JSON.parse(scoresText);
  }

  // Add the new score and save
  scores.push(newScore);
  localStorage.setItem('scores', JSON.stringify(scores));

    alert(`You rated "${showName}" with ${rating} star(s)!`);
  };

  return (
    <div className="rating-container center">
      <h2 className="game-name">Rate a TV Show</h2>
      <input
        type="text"
        className="show-input"
        placeholder="Enter TV show name"
        value={showName}
        onChange={handleShowInput}
      />
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <React.Fragment key={star}>
            <input
              type="radio"
              id={`star${star}`}
              name="rating"
              value={star}
              checked={rating === star}
              onChange={handleRatingChange}
            />
            <label htmlFor={`star${star}`}>&#9733;</label>
          </React.Fragment>
        ))}
      </div>
      <button className="btn btn-primary submit-btn" onClick={handleSubmit}>
        Submit Rating
      </button>
    </div>
  );
}
