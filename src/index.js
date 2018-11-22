import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
require('./styles/main.css');

ReactDom.render(<App/>, document.querySelector('#container'));
