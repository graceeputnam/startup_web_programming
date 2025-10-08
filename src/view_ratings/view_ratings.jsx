import React from 'react';
import './view_ratings.css';

export function View_ratings() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <table className="table table-primary table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>TV Show</th>
            <th>Rating</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>도윤 이</td>
            <td>Vampire Diaries</td>
            <td>4/5</td>
            <td>May 20, 2021</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Annie James</td>
            <td>The Office</td>
            <td>5/5</td>
            <td>June 2, 2021</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gunter Spears</td>
            <td>Severance</td>
            <td>2/5</td>
            <td>June 7, 2021</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}