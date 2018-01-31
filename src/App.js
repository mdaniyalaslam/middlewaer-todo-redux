import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import store from './Store/reducers';  
// import Home from './components/home'
// import changeName from './Store/Action/action';
import TodoMdware from './Store/middleware/todoMiddleware';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import Header from './components/header'
import *as firebase from 'firebase';




//////////////////////////////////////////////////////////////////////constructor starts
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // todoInput: '',
      // todos: []
    }
    // this.onChangeHandler = this.onChangeHandler.bind(this)
  }
    addingTodo(data){   // data me todos arahi hen header.js se
      console.log('addig:' + data)
      // firebase.database().ref('/').child('reduxtodos').push(data)
      // .then(()=>{
      //   alert('success')
      // }
      // )
    }
  //////////////////////////////////////////////////////////////////////constructor ends
//1
  render() {
    return (
      <div className="App" >
        <Header addValue={this.addingTodo.bind(this)} />
      </div>
    );
  }
}
function mapStateToProp(state){
  return {
    rootObj: state.root
  }
}
function mapDispatchToProp(dispatch){
  return{
    addingTodo: (val)=>{
      dispatch(TodoMdware.asyncTodo(val))
    }
  }
}
// export default App;
export default connect(mapStateToProp, mapDispatchToProp)(App);








//1
  // onChangeHandler(ev) {
    //   this.setState({
      //     [ev.target.name]: ev.target.value
      //   })
      // }
      
      // _changeData() {
        //   console.log('it works');
        //   // this.props.changeName();
        //   this.state.todos.push(this.state.todoInput);
        //   this.props.addTodo(this.state.todos);
        // }
        
        //////////////////////////////////////////////////////////////////////REnder
