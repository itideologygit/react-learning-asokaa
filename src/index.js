import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Login from './View/Login/LoginView';

import './index.css';


render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
