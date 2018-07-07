/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/createBrowserHistory';

// Import root app
import App from 'containers/App';

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import 'sanitize.css/sanitize.css';
import 'styles';


import configureStore from './configureStore';

/* ----------------------- check loading special fonts ------------------------------------------- */
const proximaReg = new FontFaceObserver('Proxima Nova Reg');
const proximaLight = new FontFaceObserver('Proxima Nova Light');

Promise.all([proximaReg.load(), proximaLight.load()]).then(() => {
    document.body.classList.add('fontLoaded');
}, () => {
    document.body.classList.remove('fontLoaded');
    console.error('some fonts not loaded');
});
/* ----------------------- check loading special fonts ------------------------------------------- */

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            {/* <LanguageProvider messages={messages}> */}
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
            {/* </LanguageProvider> */}
        </Provider>,
        MOUNT_NODE,
    );
};

if (module.hot) {
    // Hot reloadable React components and translation json files
    // modules.hot.accept does not accept dynamic dependencies,
    // have to be constants at compile-time
    module.hot.accept(['containers/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
    });
}

render();
