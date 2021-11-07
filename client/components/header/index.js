import React from 'react';
import { SubNav } from '../subnav';
import { BearLogo } from './bearlogo';
import BearsDoingStuff from './bears-doing-stuff.png';
import './styles.css';

export function Header() {
  return (
    <header>
      <div className="header-container">
        <BearLogo />
        <img className="header-brand-text" src={BearsDoingStuff} />
      </div>
      <SubNav />
    </header>
  );
}
