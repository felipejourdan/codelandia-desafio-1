import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainScroll from './MainScroll';

const App = () => {
  return (
    <div className="">
      <Header className="container" />
      <MainScroll />
      <Footer />
    </div>
  );
};

export default App;
