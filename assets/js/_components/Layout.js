/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
