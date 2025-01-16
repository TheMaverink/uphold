import './styles.css';

import React from 'react';

export default function Header() {
  return (
    <header>
      <img src="/assets/images/logo.svg" alt="Logo" />

      <h1 className="header-title" style={{fontFamily:'proxima-nova'}}>Currency Converter</h1>
      <h2 className="header-description">
        Receive competitive and transparent pricing with no hidden spreads. See
        how we compare.
      </h2>
    </header>
  );
}
