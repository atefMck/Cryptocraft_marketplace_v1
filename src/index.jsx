import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
require('dotenv').config()

const rootEl = document.getElementById('root');

render(<App />, rootEl);
