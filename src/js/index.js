import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import Routes from './routes'

let element = document.getElementById('content');
ReactDOM.render(<Router history={browserHistory} routes={Routes} />, element);

document.body.classList.remove('loading');