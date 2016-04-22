/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h1>React + Nodejs</h1>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
