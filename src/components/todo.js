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
            // todos: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        //Firebase
        firebase.database().ref('/reduxTodos').on('child_added', (snap)=>{
            let firebaseObj = {};
            // firebaseObj.todo = snap.val();
            // firebaseObj.key = snap.key;
            console.log('1st'+ firebaseObj)
            // this.setState({todos:firebaseObj})
            // console.log(this.state.todos)
            // object.value=snap.val();
            // object.id=snap.key; 
            // let currentItems = this.state.todos
            // this.props.addTodo(firebaseObj)
            // this.props.addTodo(this.state.todos); // action
            
            // console.log(object)


        })
    }
    onChangeHandler(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
  
      add(){
        // this.state.todos.push(this.state.todoInput);
        let currentTodos = this.state.todoInput
        // console.log(currentTodos)
                  
          firebase.database().ref('/').child('reduxTodos').push(currentTodos)
          .then(()=>{
            this.setState({
                todoInput : ''
            })

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
                        // console.log(this.props.comingTodoState)
                        // this.props.comingTodoState.map((todo) => {
                        //     return <tr><td>{todo}</td></tr>
                        // })
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
    return({
        addTodo : (val)=>{dispatch(TodoMdware.asyncTodo(val))}
    })
    
}

export default connect(mapStateToProp, mapDispatchToProp) (Todo);