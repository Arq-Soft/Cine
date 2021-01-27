import * as actionTypes from './actions';

// App state
const appState = {
    auth_token: null,
    movie_to_reserve:null
}


const reducer = (state=appState, action) => {

    switch (action.type) {
        case actionTypes.SET_AUTH_TOKEN:
            console.log("---------", action);
            return { ...state, auth_token: action.auth_token }
            
        case actionTypes.SET_MOVIE_TO_RESERVE:
             console.log("---------", action);
            return { ...state, movie_to_reserve: action.movie }
                
        default: return state;
        
    }
}


export default reducer;