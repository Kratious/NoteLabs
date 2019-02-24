import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';
import axios from "axios";
axios.defaults.withCredentials = true;

ReactDOM.render(<App />, document.querySelector('#root'));