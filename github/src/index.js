import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import '@blueprintjs/core/dist/blueprint.css';
import axios from 'axios';
import './index.css';

axios.defaults.baseURL = 'https://api.github.com';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
