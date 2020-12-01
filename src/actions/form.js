import {GET_USER_VIA_DEPARTMENT} from '../actions'
import {APIUrls} from '../helpers/urls'
import {getFormBody} from '../helpers/utils'



export function fetchUserViaDepartment(department){
    return{
        type:GET_USER_VIA_DEPARTMENT,
        department
    }
}


export function fetchUser(department){
    
    return(dispatch)=>{
        dispatch(fetchUserViaDepartment())

    }

}
