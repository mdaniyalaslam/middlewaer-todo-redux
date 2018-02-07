import *as firebase from 'firebase';

export default class ActionTypes {
    static USERNAME = "USERNAME";
    static ADD_TODO = "ADD_TODO";
    static DELETE_TODO = "DELETE_TODO";
    static EDIT_TODO = "EDIT_TODO";

       
    // static changeName() {
    //     return {
    //         type: this.USERNAME, 
    //         payload:'new'
    //     };   
    // }

    static addTodo (val) {
        return {type: this.ADD_TODO, payload:val}; 
    }
    static deleteTodo (currentItem) {
        firebase.database().ref('/').child('reduxTodos/' + currentItem).remove();
        firebase.database().ref('reduxTodos').on('child_added', (snap) => {
            let obj = snap.val()
            obj.key = snap.key
            // this.props.addtoTodo(obj)
            return {type: this.DELETE_TODO, payload:obj}; 
        })
    }
    // static editTodo (val) {
    //     return {
    //         type: this.EDIT_TODO, 
    //         payload:val
    //     }; 
    // }
} 