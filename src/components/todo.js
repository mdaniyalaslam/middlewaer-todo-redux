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
    }
    onChangeHandler(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    _changeData() {
        console.log('it works');
        // this.props.changeName();
        
        this.state.todos.push(this.state.todoInput);
        this.props.addTodo(this.state.todos);
      }
    render() {
        return (
            <div className="App" >
            <h1>Todo{this.props.comingState}</h1>
                <br />
                <TextField
                    id="text-field-default"
                    placeholder="Write Todo Here.."
                    name="todoInput" onChange={this.onChangeHandler}
                />
                <button onClick={this._changeData.bind(this)}>Add</button>
                {/* {console.log(this.props.comingTodoState)} */}
                <table>
                    {/* {
                        this.props.rootObj.todos.map((val, ind) => {
                            return <tr><td>{val}</td></tr>
                        })
                    } */}
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
        addTodo : (val)=>{dispatch(TodoMdware.asyncTodo)}
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (Todo);