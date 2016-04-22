import React from 'react';
import ReactDom from 'react-dom/server';
import InitialPage from './InitialPage';

export default function renderInitialPage(req, res) {
  res.status(200).send(ReactDom.renderToStaticMarkup(<InitialPage />));
}
