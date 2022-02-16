import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './firebase';
import App from './app/App';
import 'antd/dist/antd.min.css';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';

import store from './Redux/store/store';

// axios.defaults.headers = {}
// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'//https://favour-exchange-project.herokuapp.com/api'
axios.defaults.withCredentials = true;


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,

    document.getElementById('root')
);


