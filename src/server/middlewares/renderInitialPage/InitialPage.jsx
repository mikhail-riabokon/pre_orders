import React from 'react';

function getStyles() {
  return process.env.HOT
    ? null
    : <link rel="stylesheet" href="/assets/main.css" />;
}

export default function InitalPage() {
  return (
    <html>
      <head>{getStyles()}</head>
      <body>
        <div id="app"></div>
        <script src="/assets/app.js"></script>
      </body>
    </html>
  );
}
