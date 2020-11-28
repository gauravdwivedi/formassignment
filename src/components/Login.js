import react from 'react'
import {connect} from 'react-redux'


import { login } from '../actions/auth'
import './Login.css'



class Login extends react.Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
        }

    }

    handleEmailChange=(e)=>{
       this.setState({
           email:e.target.value,
       })
    }

    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }

    handleFormSubmit=(e)=>{
        e.preventDefault();

        console.log('this.state',this.state);
        const {email,password}=this.state;

        if(email && password){
            this.props.dispatch(login(email,password))
        }
    }

    render(){

        const {error,inProgress} =this.props.auth

        return (<div className="login-signup-header">
            {error && <div className="alert error-dailog"> {error}</div>}
            <form className="login-form"> Login
            <div className="field">
                <input type="email" placeholder="Enter email"  required onChange={this.handleEmailChange} value={this.state.email}/>
            <input type="password" placeholder="Enter password" required onChange={this.handlePasswordChange} value={this.state.password}/>

            <button onClick={this.handleFormSubmit} disabled={inProgress}>Login</button></div>
            
            </form>
            
            
        </div>)
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
    }
}

export default connect(mapStateToProps)(Login);
