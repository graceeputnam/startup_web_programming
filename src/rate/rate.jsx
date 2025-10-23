import React from 'react';

import { Players } from './players';
import { RateGame } from './rateGame';

export function Play(props) {
  return (
    <div className='bg-secondary'>
      <Players userName={props.userName} />
      <RateGame userName={props.userName} />
    </div>
  );
}

