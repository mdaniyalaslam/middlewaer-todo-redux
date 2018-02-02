export default class ActionTypes {
    static USERNAME = "USERNAME";
    static ADD_TODO = "ADD_TODO";
    static DELETE_TODO = "DELETE_TODO";
    static EDIT_TODO = "EDIT_TODO";

       
    static changeName() {
        return {
            type: this.USERNAME, 
            payload:'new'
        };
        
    }
    static addTodo (val) {
        console.log('action'+val)
        return {
            type: this.ADD_TODO, 
            payload:val
        }; 
    }
    static deleteTodo (val) {
        return {
            type: this.DELETE_TODO, 
            payload:val
        }; 
    }
    static editTodo (val) {
        return {
            type: this.EDIT_TODO, 
            payload:val
        }; 
    }
} 