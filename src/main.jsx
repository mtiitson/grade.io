import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root.jsx';
import configureStore from './store/index.js';
import bootstrap from 'bootstrap-sass';
import bootstrapSwitch from 'bootstrap-switch';
import bootstrapSwitchStyles from 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css!';

//import styles from 'styles/styles.scss!';

const appRoot = document.getElementById('app-host');
render(
    <Root 
        store={configureStore({state: {}})} 
    />, appRoot);
