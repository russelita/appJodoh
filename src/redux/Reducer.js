import { combineReducers } from "redux";

const dataGlobalLogin={
    isLogin:false,
    dataUser:{},
}

function LoginReducer(state=dataGlobalLogin,action){
    switch (action.type) {
        case "SET_LOGIN":
            return({
            ...state,
            [action.inputType]: action.inputValue
        })        
    }

    return state;
}

const reducer = combineReducers({
    LoginReducer,
})

export default reducer