import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './About';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store';
import { createStore } from 'redux';
import *as firebase from 'firebase';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAkhH4uLWHVBCVd5wtIvK6l6p9BLTZXBLs",
    authDomain: "todo-app-2411f.firebaseapp.com",
    databaseURL: "https://todo-app-2411f.firebaseio.com",
    projectId: "todo-app-2411f",
    storageBucket: "todo-app-2411f.appspot.com",
    messagingSenderId: "213722828277"
  };
  firebase.initializeApp(config);



// const Store = createStore(store);
// const render = () => ReactDOM.render(
ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
);

// render();
// store.subscribe(render)


