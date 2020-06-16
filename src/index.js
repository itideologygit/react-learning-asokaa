import React from 'react';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Routes from './config/routes'

render(
  <Routes />,
  document.getElementById('root')
);

serviceWorker.unregister();
