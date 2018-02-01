import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoMdware from '../Store/middleware/todoMiddleware';
import TextField from 'material-ui/TextField';
import *as firebase from 'firebase';

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            todoInput: '',
            todos: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        //Firebase
        firebase.database().ref('/reduxTodos').on('child_added', (snap)=>{
            let firebaseObj = snap.val();
            // firebaseObj.key = snap.key; 
            console.log(firebaseObj)
        })
    }
    onChangeHandler(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    _changeData() {
        // console.log('it works');
        // this.props.changeName();
        this.state.todos.push(this.state.todoInput);
       // this.props.addTodo(this.state.todos); // action
        this.setState({
            todoInput : ''
        })
      }
      add(){
        // this.state.todos.push(this.state.todoInput);
        let currentTodos = this.state.todoInput
        // console.log(currentTodos)
                  
          firebase.database().ref('/').child('reduxTodos'+'/'+'todos').push(currentTodos)
          .then(()=>{
            //   currentTodos.key = val.key;
            //   console.log(val.key)

          })
      }

    
    render() {
        return (
            <div className="App" >
            <h1>Todo</h1>
                <br />
                <TextField
                    id="text-field-default"
                    placeholder="Write Todo Here.."
                    name="todoInput" onChange={this.onChangeHandler}
                    value={this.state.todoInput}
                />
                <button onClick={this.add.bind(this)}>Add</button>
                {/* {console.log(this.props.comingTodoState)} */}
                <table>
                    {
                        this.props.comingTodoState.map((val, ind) => {
                            return <tr><td>{val}</td></tr>
                        })
                    }
                </table>
            </div>
        );
    }

}
function mapStateToProp(state){
    return{
        comingState: state.root.userName,
        comingTodoState: state.root.todos
    }
}
function mapDispatchToProp(dispatch){
    return{
        addTodo : (val)=>{dispatch(TodoMdware.asyncTodo(val))}
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (Todo);