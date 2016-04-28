/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <h1>Brand</h1>

        <Nav />
      </header>
    );
  }
}
