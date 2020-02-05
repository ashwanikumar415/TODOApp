import * as actionTypes from './../store/action'
const initialState = {
    tasks:[]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TASK: 
            return {
                ...state,
                tasks: state.tasks.concat(action.value)
            };
        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: action.value
            };
    }
    return state;
}