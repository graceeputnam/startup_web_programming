import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
  <div className="bg-primary text-light">
    <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <a className="navbar-brand" href="#">TV RATING</a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="rate.html">Rate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="view_ratings.html">View Ratings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main>App components go here</main>

    <footer className="bg-primary text-white-50">
      <div className="container-fluid">
        <span className="text-reset">Gracee Putnam</span>
        <a className="text-reset" href="https://github.com/graceeputnam">Github</a>
      </div>
    </footer>
    </div>
    );
}
