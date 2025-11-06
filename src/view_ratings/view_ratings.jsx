import React from 'react';
import './view_ratings.css';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  
  React.useEffect(() => {
      fetch('/api/scores')
        .then((response) => response.json())
        .then((scores) => {
          setScores(scores);
        });
    }, []);

  // Render scores table
  const scoreRows = [];
  if (scores.length) {
for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.show}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key="0">
        <td colSpan="5">Be the first to rate a show!</td>
      </tr>
    );
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Show</th>
            <th>Name</th>
            <th>Show</th>
            <th>Rating</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="ratings">{scoreRows}</tbody>
      </table>
    </main>
  );
}

