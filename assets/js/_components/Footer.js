/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import Link from './Link';

export default class Footer extends React.Component {
  render() {
    return(
      <footer>
        <p>&copy; Copyright { new Date().getFullYear() }</p>
        <p>Made with love and the bullshit of <Link href="https://facebook.github.io/react" text="React" />.</p>
        <Nav />
        <Link href="#" text="To the top" />
      </footer>
    );
  }
}
