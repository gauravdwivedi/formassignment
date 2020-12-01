import react from 'react'
import {connect} from 'react-redux'
import {startSignup,signup} from '../actions/auth'
import './Login.css'


class Register extends react.Component{

    constructor(props){
        super(props)
        this.state={
               email:'',
               password:'',
               confirmPassword:'',
               department:'SALES',
               

        }
    }


    handleInputChange=(field,value)=>{
        this.setState({
            [field]:value
        })
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        

        const {email,password,confirmPassword,department}= this.state
        console.log(email,password,confirmPassword,department)
        if(email && password && confirmPassword && department){
            this.props.dispatch(startSignup())
            this.props.dispatch(signup(email,password,confirmPassword,department))
        }
    }

    render(){
        const {inProgress, error}= this.props.auth

        return (
        <div className="login-signup-header">
        
        <form className="login-form"> Register
        {error &&<div className="alert error-dailog">{error}</div>}
        <div className="field">
        <input type="email" placeholder="Email" required  onChange={(e)=>this.handleInputChange('email',e.target.value)}
        />

        <select name="department" defaultValue={this.state.department} onChange={(e)=>this.handleInputChange('department',e.target.value)} >
            <option value="SALES">SALES</option>
            <option value="MARKETING">MARKETING</option>
            <option value="ACCOUNTS">ACCOUNTS</option>
            <option value="PLANNING">PLANNING</option>
            <option value="MANUFACTURING">MANUFACTURING</option>
        </select>

        <input type="password" placeholder="Password" 
            required
            onChange={(e)=> this.handleInputChange('password',e.target.value)}
        />
        <input type="password" placeholder="Confirm Password"
            required
            onChange={(e)=>this.handleInputChange('confirmPassword',e.target.value)}
        />

        {inProgress ? 
        <button  disabled={inProgress}>Signing...</button>
            :<button onClick={this.onFormSubmit} disabled={inProgress}>SignUp</button>
    }
        </div>
    
        </form>
        
        
    </div>)
    }

}

const mapStateToProps =({auth})=>({
    auth,
})

export default connect(mapStateToProps)(Register)