import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import '@blueprintjs/core/dist/blueprint.css';
import './mock';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
