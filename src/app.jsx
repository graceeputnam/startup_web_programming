import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
      import { Login } from './login/login';
      import { Rate } from './rate/rate';
      import { View_ratings } from './view_ratings/view_ratings';
      import { About } from './about/about';
      import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    return (
      <BrowserRouter>
  <div className="bg-primary text-light">
    <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <a className="navbar-brand" href="#">TV RATING</a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="">
              Login
            </NavLink>
          </li>
          {authState === AuthState.Authenticated && (
          <li className="nav-item">
            <NavLink className="nav-link" to="rate">
              Rate
            </NavLink>
          </li>
          )}
          {authState === AuthState.Authenticated && (
          <li className="nav-item">
            <NavLink className="nav-link" to="view_ratings">
              View_ratings
            </NavLink>
          </li>
          )}
          <li className="nav-item">
            <NavLink className="nav-link" to="about">
              About
             </NavLink>
          </li>
        </menu>
      </nav>
    </header>

    <main>
      <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
  <Route path='/' element={<Login />} exact />
  <Route path='/rate' element={<Rate />} />
  <Route path='/view_ratings' element={<View_ratings />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
</Routes>
</main>

    <footer className="bg-primary text-white-50">
      <div className="container-fluid">
        <span className="text-reset">Gracee Putnam</span>
        <a className="text-reset" href="https://github.com/graceeputnam">Github</a>
      </div>
    </footer>
    </div>
    </BrowserRouter>
    );

    
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}



