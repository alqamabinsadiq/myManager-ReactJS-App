/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import firebase from 'firebase';
//import { AppContainer } from 'react-hot-loader';
// import Root from './components/Root';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Initializing Firebase
        const config = {
            apiKey: "AIzaSyCv1YcLZxtQLZErsuH0n7bMOfQMZMCFiyw",
            authDomain: "mymanager-bec86.firebaseapp.com",
            databaseURL: "https://mymanager-bec86.firebaseio.com",
            projectId: "mymanager-bec86",
            storageBucket: "mymanager-bec86.appspot.com",
            messagingSenderId: "485887851803"
        };
        firebase.initializeApp(config);

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);

