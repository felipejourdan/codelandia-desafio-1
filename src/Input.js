import React from 'react';
import Search from './img/search.svg';

const Input = () => {
  return (
    <>
      <div className="inputContainer">
        <img src={Search} alt="" />
        <input type="text" name="" id="" placeholder="Pesquisar no blog" />
      </div>
    </>
  );
};

export default Input;
