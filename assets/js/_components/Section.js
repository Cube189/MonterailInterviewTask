/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

import Paragraph from './Paragraph.js';

export default class Section extends React.Component {
  render() {
    return(
      <article id={this.props.title.toLowerCase()}>
        <header>
          <h1>
            { this.props.title }
          </h1>
        </header>

        {
          this.props.text.map(
            function(t, id) {
              return (<Paragraph text={t} key={id}/>);
            }
          )
        }

      </article>
    );
  }
}
