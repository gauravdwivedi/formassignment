import {LOGIN} from './actionTypes'

export function  userLogin(user){
    
    return {
        type:LOGIN,
        user
    }
}