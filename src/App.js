import React, { Component } from 'react';
import Searcher from './Searcher';
import Bag from './Bag';

class App extends Component {

  render() {
    return (
      <div className="navbar navbar-light">
        <h1 className="Logo">SHOPMATE</h1>
        <h3>Women</h3>
        <h3>Men</h3>
        <h3>Kids</h3>
        <h3>Shoes</h3>
        <h3>Brands</h3>

        <Searcher/>
        <Bag/>
      </div>
    );
  }
}

export default App;
