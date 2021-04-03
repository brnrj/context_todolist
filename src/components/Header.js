import React from 'react';
import InputBox from './InputBox';

function Header({ title }) {
  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
      <InputBox />
    </header>
  );
}

export default Header;
