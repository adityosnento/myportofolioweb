const initialState = {
    todosList: [],
    errors: null,
    number : 1
}

const todosReducer = (state=initialState,action) => {
    const {type, payload} = action;
    switch(type) {
       case "GET":
            return {
                ...state,
                todos: action.payload
            }
        
        default:
            return {
                ...state,
            }
    }}




export default todosReducer;