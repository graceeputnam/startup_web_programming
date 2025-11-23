import React from 'react';
import './rate.css';
import { Players } from './players';
import { RateGame } from './rateGame';

export function Rate(props) {
  return (
  <>
    {/* Community/event activity feed — flush left */}
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "40px",
        transform: "translateY(-50%)",
        width: "300px",
        background: "rgba(28,28,28,0.97)",
        borderRadius: "10px",
        color: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
        zIndex: 900,
        padding: "1em",
      }}
    >
      <Players userName={props.userName} />
    </div>

    {/* Centered Rating UI */}
    <main
      className="bg-secondary"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 420 }}>
        <RateGame userName={props.userName} />
      </div>
    </main>
  </>
);

}
