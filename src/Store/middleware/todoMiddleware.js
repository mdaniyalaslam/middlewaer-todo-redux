import  ActionTypes from '../Action/action';

export default class TodoMdware{
    static asyncName(){
        return (dispatch) =>{
            dispatch(ActionTypes.changeName())
        }
    }
    static asyncTodo(val){
        return (dispatch) =>{
            dispatch(ActionTypes.addTodo(val))
        }
    }
    static asyncDelete(val){
        return (dispatch) =>{
            dispatch(ActionTypes.addTodo(val))
        }
    }
    static asyncEdit(val){
        return (dispatch) =>{
            dispatch(ActionTypes.addTodo(val))
        }
    }
}