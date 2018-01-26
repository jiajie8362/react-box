import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

import CommentApp from './CommentApp';


ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)
// ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
