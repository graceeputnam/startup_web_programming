import React, { useState } from 'react';
import './rate.css';

// StarRating Component
function StarRating({ rating, setRating }) {
  return (
    <div className="stars">
      {[5, 4, 3, 2, 1].map(star => (
        <React.Fragment key={star}>
          <input
            type="radio"
            id={`star${star}`}
            name="rating"
            value={star}
            checked={rating === star}
            onChange={() => setRating(star)}
            style={{ display: 'none' }} // hide the radio buttons themselves
          />
          <label
           htmlFor={`star${star}`}
            style={{ 
              cursor: 'pointer',
              color: rating >= star ? '#FFD700' : '#999', // gold for selected, grey for unselected
              fontSize: '2rem'
            }}
            onClick={() => setRating(star)}
          >
            &#9733;
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function RateGame() {
  const [showName, setShowName] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic: showName and rating states hold values
    console.log(`Rated ${showName} with ${rating} stars`);
    // Reset if desired: setShowName(''); setRating(0);
  };

  return (
      <main className="bg-secondary">
      <div className="players-feed"> 
      <div className="player-header">
        TV ENJOYER: <span className="player-name">Chloe</span>
      </div>
      <div id="player-messages">
        <div className="event"><span className="player-event">Tim</span> rated a new show</div>
        <div className="event"><span className="player-event">Ada</span> rated a new show</div>
        <div className="event"><span className="system-event">Jim</span> liked your rating</div>
      </div>
      </div>
      
      <div className="rating-container center">
        <h2 className="game-name">Rate a TV Show</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="show-input"
            placeholder="Enter TV show name"
            value={showName}
            onChange={(e) => setShowName(e.target.value)}
          />
          <StarRating rating={rating} setRating={setRating} />
          <button className="btn btn-primary submit-btn" type="submit">
            Submit Rating
          </button>
        </form>
      </div>
    </main>
  );
}

