import react from 'react'
import './Login.css'


class Register extends react.Component{

    render(){

        return (<div className="login-signup-header">
        <form className="login-form"> Register
        <div className="field">
        <input type="text" placeholder="Email" />
        
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        
        <button>Register</button></div>
        
        </form>
        
        
    </div>)
    }

}

export default Register