import React, { useState } from 'react';

export function RateGame() {
  const [showName, setShowName] = useState('');
  const [rating, setRating] = useState(null);

  const handleShowInput = (e) => setShowName(e.target.value);

  const handleRatingChange = (e) => setRating(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can process the rating/showName here (ex: send to backend, display it, etc)
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
        {[5, 4, 3, 2, 1].map((star) => (
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
