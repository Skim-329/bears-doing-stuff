import React from 'react';
import { NavLink } from 'react-router-dom';
import { SubNav } from '../subnav';
import { BearLogo } from './bearlogo';
import BearsDoingStuff from './bears-doing-stuff.png';
import './styles.css';

export function Header() {
  return (
    <header>
      <div className="header-container">
        <NavLink to="/">
          <BearLogo />
        </NavLink>
        <img className="header-brand-text" src={BearsDoingStuff} />
      </div>
      <SubNav />
    </header>
  );
}
