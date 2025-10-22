import React from 'react';
import './rate.css';

import { Players } from "./players";
import { RateGame } from "./rateGame"


 export function Rate(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <RateGame userName={props.userName} />
    </main>
  );
}

