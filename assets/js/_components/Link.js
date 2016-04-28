/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

export default class Link extends React.Component {
  render() {
    return (
      <a
        href={this.props.href}
        target={
          (this.props.target !== null)?
          this.props.target
          : "_self"
        }>

        {this.props.text}

        </a>
    );
  }
}
