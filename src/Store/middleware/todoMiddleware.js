import  ActionTypes from '../Action/action';

export default class TodoMdware{
    static asyncName(){
        return (dispatch) =>{
            dispatch(ActionTypes.changeName())
        }
    }
    static asyncTodo(val){
        // console.log('middleware'+ val)
        return (dispatch) =>{
            dispatch(ActionTypes.addTodo(val))
        }
    }
    static asyncDelete(currentItem){
        return (dispatch) =>{
            dispatch(ActionTypes.deleteTodo(currentItem))
        }
    }
//     static asyncEdit(val){
//         return (dispatch) =>{
//             dispatch(ActionTypes.addTodo(val))
//         }
//     }
}
