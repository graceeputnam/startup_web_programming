import React from 'react';
import './rate.css';

//import { Players } from "./players";
import { RateGame } from "./rateGame"


 export function Rate(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <RateGame userName={props.userName} />
    </main>
  );
}


export function Rate() {
  return (

      <div className="rating-container center">
      <h2 className="game-name">Rate a TV Show</h2>
      
      
      <input type="text" className="show-input" placeholder="Enter TV show name" />

      
      <div className="stars">
        <input type="radio" id="star5" name="rating" value="5" />
        <label for="star5">&#9733;</label>
        <input type="radio" id="star4" name="rating" value="4" />
        <label for="star4">&#9733;</label>
        <input type="radio" id="star3" name="rating" value="3" />
        <label for="star3">&#9733;</label>
        <input type="radio" id="star2" name="rating" value="2" />
        <label for="star2">&#9733;</label>
        <input type="radio" id="star1" name="rating" value="1" />
        <label for="star1">&#9733;</label>
      </div>

      <button className="btn btn-primary submit-btn">Submit Rating</button>
    </div>
    </main>
  );
}