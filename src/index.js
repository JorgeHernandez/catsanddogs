import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './components/app';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('.container'));
