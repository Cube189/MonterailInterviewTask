/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

export default class Paragraph extends React.Component {
  render() {
    return (<p>{ this.props.text }</p>);
  }
}
