const msgReducer = (state = 'hello', action) =>{
    switch(action.type){
        case 'append':
            return state = action.payload;
        case 'clear':
            return state = ''
        default:
            return state
    }
}

export default msgReducer;