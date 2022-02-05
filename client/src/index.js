import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './app/App';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/store/store';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);




