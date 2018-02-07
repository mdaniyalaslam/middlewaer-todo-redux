import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Todo from './components/todo';
// import About from './About';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store';
import { createStore } from 'redux';
import *as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


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


ReactDOM.render(

  <MuiThemeProvider>
    <Provider store={store}>


      <div>
        <AppBar
          title="Todo App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Todo />
      </div>

    </Provider>
  </MuiThemeProvider>


  ,
  document.getElementById('root')
);

