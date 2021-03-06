import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import store from './Store/reducers';  
// import Home from './components/home'
// import changeName from './Store/Action/action';
import TodoMdware from '../Store/middleware/todoMiddleware';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';



class Header extends Component {
  constructor() {
    super()
    this.state = {
      todoInput: '',
      todos: []

    }
    this.onChangeHandler = this.onChangeHandler.bind(this)

  }

  onChangeHandler(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

//   _changeData() {
//     console.log('it works');
//     // this.props.changeName();
//     this.state.todos.push(this.state.todoInput);
//     this.props.addTodo(this.state.todos);

//   }
addTodo(){
    this.state.todos.push({todo : this.state.todoInput});
    this.setState({todoInput:''})
    this.props.addValue({todo : this.state.todoInput})   // is me data h todo ka jo yahan se ja raha h app me
}

  render() {
    return (
      <div className="App" >
      <br />
        <TextField
          id="text-field-default"
          placeholder="Write Todo Here.."
          name="todoInput" onChange={this.onChangeHandler}
        />
        <button onClick={this.addTodo.bind(this)}>Add</button>

        {/* {console.log(this.props.rootObj.todos)} */}
        {/* <table>

          {
            this.props.rootObj.todos.map((val, ind) => {
              return <tr><td>{val}</td></tr>
            })
          }


        </table> */}


      </div>
    );
  }
}

// function mapStateToProp(state) {
//   return ({
//     rootObj: state.root
//   })
// }

// function mapDispatchToProp(dispatch) {
//   return ({
//     changeName: () => { dispatch(TodoMdware.asyncName()) },
//     addTodo: (val) => { dispatch(TodoMdware.asyncTodo(val)) }
//   })

// }
export default Header;
// export default connect(mapStateToProp, mapDispatchToProp)(Header);

