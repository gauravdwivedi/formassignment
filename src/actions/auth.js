import {LOGIN_START} from './actionTypes'
import {APIUrls} from '../helpers/urls'
import {getFormBody} from '../helpers/utils'

export function startLogin(){
    return{
        type:LOGIN_START,
    }
}


// login?email=a@a.com&password=454545

export function login(email,password){
    return (dispatch)=>{

        dispatch(startLogin())
        
                const url =APIUrls.login();

              const  payload={
                    email,
                    password
                }

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
                },
                (error)=>{
                    console.log(error)
                })
                
    }
}