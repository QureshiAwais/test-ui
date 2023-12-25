export const appReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            state={
                ...state,
                isLoggedIn:action.payload
            }
            break;
        case 'LOGOUT':
            state={
                ...state,
                isLoggedIn:null
            }
            break;   
    }
    return state;
}