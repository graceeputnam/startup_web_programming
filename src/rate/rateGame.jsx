import React, { useState } from 'react';
import './rate.css';
import { GameNotifier, GameEvent } from './gameNotifier';

function StarRating({ rating, setRating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(star => (
        <label
          key={star}
          htmlFor={`star${star}`}
          style={{
            cursor: 'pointer',
            color: rating >= star ? '#FFD700' : '#999',
            fontSize: '2rem'
          }}
          onClick={() => setRating(star)}
        >
          &#9733;
        </label>
        ))}
    </div>
  );
}

export function RateGame({ userName }) {
  const [showName, setShowName] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Save to localStorage for rating history
    const scoresArr = JSON.parse(localStorage.getItem('scores') || '[]');
    scoresArr.unshift({
      name: userName,
      show: showName,
      score: rating,
      date: new Date().toLocaleString()
    });
localStorage.setItem('scores', JSON.stringify(scoresArr));
    // Broadcast to community feed
    GameNotifier.broadcastEvent(
      userName,
      GameEvent.End,
      { name: showName, score: rating, date: new Date().toLocaleString() }
    );
    setShowName('');
    setRating(0);
  };

  return (
    <div className="rating-container center">
      <h2>Rate a TV Show</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="show-input"
          placeholder="Enter TV show name"
          value={showName}
          onChange={e => setShowName(e.target.value)}
          style={{ marginBottom: 12 }}
        />
        <StarRating rating={rating} setRating={setRating} />
        <button
          className="btn btn-primary submit-btn"
          type="submit"
          disabled={!showName || rating === 0}
        >
          Submit Rating
        </button>
      </form>
{submitted && (
        <div style={{ marginTop: 16 }}>
          Thank you! Your rating has been submitted.
        </div>
      )}
    </div>
  );
}


