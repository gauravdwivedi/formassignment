import {AUTHENTICATE_USER, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOG_OUT, SIGNUP_START, SIGNUP_SUCCESS} from './actionTypes'
import {APIUrls} from '../helpers/urls'
import {getFormBody} from '../helpers/utils'

export function startLogin(){
    return{
        type:LOGIN_START,
    }
}

export function startSignup(){
    return{
        type:SIGNUP_START,

    }
}

export function signupSuccess(){
    return{
        type:SIGNUP_SUCCESS,
    }
}

export function loginSuccess(user){
    return{
        type:LOGIN_SUCCESS,
        user
    }
}


export function loginFailed(errorMessage){
    return{
        type:LOGIN_FAILED,
        error:errorMessage
    }
}
 
export function signup(email,password,confirmPassword,department){
    return (dispatch) =>{

        const url=APIUrls.signup();

        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: getFormBody({
                email,
                department,
                password,
            })
        })
        
        .then((res)=>res.json())
            .then((data)=>{
                    console.log(data)
                        if(data.success){
                                    dispatch(signupSuccess())
                                        }
                                        })
                                    }
                                }

// login?email=a@a.com&password=454545

export function login(email,password){
    return (dispatch)=>{

        dispatch(startLogin())
        
                const url =APIUrls.login();

              console.log('Inside auth login action')

                fetch(url,{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },

                    body:getFormBody({email,password})
                    })
                .then((response)=>response.json())
                .then((data)=>{

                    console.log('data',data)

                    if(data.success){
                        localStorage.setItem('token',data.token)
                        //dispatch action to save user
                        dispatch(loginSuccess(data.user))
                        return;
                    }
                    //login failed
                    dispatch(loginFailed(data.message))

                    },
                (error)=>{
                    console.log(error)
                    })
                }
            }


            export function authenticateUser(user){
                return{
                    type:AUTHENTICATE_USER,
                    user,
                }
            }

            export function logoutUser(){
                return {
                    type:LOG_OUT,
                    
                }
            }