import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TodoMdware from '../Store/middleware/todoMiddleware';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import *as firebase from 'firebase';

const style = {
    margin: 12,
  };
  
class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoInput: '',
            todos: {}
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        firebase.database().ref('reduxTodos').on('child_added', (snap) => {
            let obj = snap.val()
            obj.key = snap.key
            this.props.addtoTodo(obj)
        })
    }
    onChangeHandler(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    add() {
        let currentTodos = {};
        currentTodos.todo = this.state.todoInput;
        firebase.database().ref('/').child('reduxTodos').push(currentTodos)
            .then((currentTodos) => {
                this.setState({
                    todoInput: ''
                })
            })
    }
    delete(item) {
        console.log('delete', item.parentNode.parentNode.id)

    }

    render() {
        return (
            <div >
                <br />
                <TextField
                    hintText="What to do.."
                    floatingLabelText="Write todo here"
                    name="todoInput" onChange={this.onChangeHandler}
                    value={this.state.todoInput}
                />
                {/* {console.log('Coming todos', this.props.comingTodoState)} */}
                <RaisedButton label="Add" onClick={this.add.bind(this)} primary={true} style={style} />

                <table>
                    <tbody>

                        {
                            Object.keys(this.props.comingTodoState).map((key) => {
                                return (
                                    <tr id={key}>
                                        <td>
                                            {(this.props.comingTodoState[key]) ? this.props.comingTodoState[key].todo : ""}
                                        </td>
                                        <td>
                                            {<button>Edit</button>}
                                        </td>
                                        <td>
                                            {<button onClick={this.delete.bind(this)}>Delete</button>}
                                        </td>


                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>

        );
    }
}


function mapStateToProp(state) {
    return {
        comingState: state.root.userName,
        comingTodoState: state.root.todos
    }
}
function mapDispatchToProp(dispatch) {
    return {
        addtoTodo: (val) => {
            dispatch(TodoMdware.asyncTodo(val));
        }
    }

}

export default connect(mapStateToProp, mapDispatchToProp)(Todo);


















  //Firebase
        // firebase.database().ref('/').on('child_added', (snap)=>{
        //     console.log('1st'+ snap)

        //     let firebaseObj = snap.val();

        //     // firebaseObj.todo = snap.val();
        //     // firebaseObj.key = snap.key;
        //     // console.log('cons'+ firebaseObj)

        //     // this.setState({todos:firebaseObj})
        //     // console.log(this.state.todos)
        //     // object.value=snap.val();
        //     // object.id=snap.key; 
        //     // let currentItems = this.state.todos
        //     // this.props.addTodo(firebaseObj)
        //     // this.props.addTodo(this.state.todos); // action

        //     // console.log(object)


        // })