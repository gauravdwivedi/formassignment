import { LOGIN_START,
     LOGIN_SUCCESS ,
     LOGIN_FAILED ,
     SIGNUP_START,
     SIGNUP_FAILED,
     SIGNUP_SUCCESS,
     AUTHENTICATE_USER,
     LOG_OUT 
    } from "../actions/actionTypes";

const initialState={
    user:{},
    error:null,
    isLoggedin:false,
    inProgress:false,
}

export default function auth( state=initialState,action){


    switch(action.type){

        case SIGNUP_START:
        case LOGIN_START:
            return {
                ...state,
                inProgress:true,
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                inProgress:false,
                error:null
            }    
        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.user,
                isLoggedin:true,
                inProgress:false,
                error:null
            }
         
        case SIGNUP_FAILED:    
        case LOGIN_FAILED:
                return {
                    ...state,
                    inProgress:false,
                    error:action.error
                }
        case AUTHENTICATE_USER:
            return{
                ...state,
                user:action.user,
                isLoggedin:true,
            }
        case LOG_OUT:
            return{
                ...state,
                user:{},
                isLoggedin:false,
            }                   
            

            default:
                return state
    }

}