import * as actionTypes from './actions';

// App state
const appState = {
    auth_token: null
}


const reducer = (state=appState, action) => {

    switch (action.type) {
        case actionTypes.SET_AUTH_TOKEN:
            console.log("---------", action);
            return { ...state, auth_token: action.auth_token }
            
        default: return state;
    }
}


export default reducer;