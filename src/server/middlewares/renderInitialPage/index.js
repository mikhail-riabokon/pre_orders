const React = require('react');
const ReactDom = require('react-dom/server');
const InitialPage = require('./InitialPage');

module.exports = () => (req, res) => {
  res.send(ReactDom.renderToStaticMarkup(React.createElement(InitialPage, null)));
};
