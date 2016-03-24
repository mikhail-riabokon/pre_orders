const React = require('react');

function getStyles() {
  return !process.env.HOT
    ? React.createElement('link', { rel: 'stylesheet', href: '/assets/main.css' })
    : null;
}

module.exports = () => {
  return React.createElement('html', null,
    React.createElement('head', null, getStyles()),
    React.createElement('body', null,
      React.createElement('div', { id: 'app' }),
      React.createElement('script', { type: 'text/javascript', src: '/assets/app.js' })
    )
  );
};
