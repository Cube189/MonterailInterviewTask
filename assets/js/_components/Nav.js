/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

import Link from './Link';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link href="#about" text="About" /></li>
          <li><Link href="#work" text="Portfolio" /></li>
          <li><Link href="#contact" text="Contact" /></li>
        </ul>
      </nav>
    );
  }
}
