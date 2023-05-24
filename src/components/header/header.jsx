import React from 'react';

import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import './header.scss';

function Header() {
  return (
    <header className="avia-header">
      <div className="avia-logo">
        <a href="#">
          <Logo alt="aviasales" title="авиасейлс" />
        </a>
      </div>
    </header>
  );
}

export default Header;
