import React from 'react';
import Input from './Input';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <Nav className="" />
        <Input />
      </div>
    </header>
  );
};

export default Header;
