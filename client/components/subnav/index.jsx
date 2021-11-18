import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export function SubNav() {
  return (
    <nav className="subnav">
      <div className="subnav-group-links">
        <div>
          <NavLink className="subnav-group-item" to={'/about'}>
            About
          </NavLink>
        </div>
        <div>
          <NavLink className="subnav-group-item" to={'/inspiration'}>
            Inspiration
          </NavLink>
        </div>
      </div>
      <div className="subnav-group">
        <button className="subnav-group-button">
          <NavLink className="subnav-group-button-text" to={'/sketchbook'}>
            Draw Your Bear
          </NavLink>
        </button>
      </div>
    </nav>
  );
}
