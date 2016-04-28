/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';

import Content from './Content';
import Section from './Section';

export default class Layout extends React.Component {
  render() {
    return(
      <section id="main">
        <Section title="About" text={["Lorem", "ipsum"]} />
        <Section title="Portfolio" text={[
          "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder", "Portfolio placeholder"
        ]} />
        <Section title="Contact" text={["Contact placeholder"]} />
      </section>
    );
  }
}
