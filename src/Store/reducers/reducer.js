import ActionTypes from '../Action/action';

const INITIAL_STATE = {
    userName : 'Old',
    todos : {}
}



export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.ADD_TODO: 
            return ({
                ...state,
                todos:{...state.todos,
                    [action.payload.key]:action.payload
                }
            })

        case ActionTypes.DELETE_TODO: 
            return ({
                ...state,
                todos:{...state.todos,
                    [action.payload.key]:action.payload
                }
            })
        // case ActionTypes.EDIT_TODO: 
        //     return ({
        //         ...state,
        //         todos:action.payload
        //     })
   
        default:
            return state;
    }
}





// export default (state=0, action) => {
//     switch(action.type){
//         case ActionTypes.INCREMENT:
//             return state + 1;
//         case ActionTypes.DECREMENT:
//             return state -1;
//         case ActionTypes.ADD:
//             return state -1;
//         default:
//             return state;
//     }
// }