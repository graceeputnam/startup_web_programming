import React from 'react';
import './rate.css';
import { Players } from './players';
import { RateGame } from './rateGame';

export function Rate(props) {
  return (
    <main className="bg-secondary rate-main" style={{ display: "flex",  gap: "32px", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "flex-start" }}>
      {/* Community/event activity feed */}
      <div style={{ flex: "1 280px", maxWidth: 300, margin: "32px 32px 0 0" }}>
        <Players userName={props.userName} />
      </div>
      {/* Rating UI */}
      <div style={{ flex: "2 400px", maxWidth: 420 }}>
        <RateGame userName={props.userName} />
      </div>
    </main>
  );
}
