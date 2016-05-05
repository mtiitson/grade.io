import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root.jsx';
import configureStore from './store/index.js';
import 'bootstrap-sass';
import './styles/styles.scss!';
import 'systemjs-hot-reloader/default-listener.js';

const appRoot = document.getElementById('app-host');
render(
    <Root 
        store={configureStore({state: {}})} 
    />, appRoot);
