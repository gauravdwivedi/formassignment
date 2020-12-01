import react from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Form from './components/Form'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Register from './components/Register'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import jwt_decode from 'jwt-decode'
import './App.css'
import { authenticateUser } from './actions/auth'
 



class App extends react.Component{

componentDidMount() {

    const token = localStorage.getItem('token')
    console.log(token);
    if(token){
      const user = jwt_decode(token)
      
      console.log("All details of user",user);

      //authenticate the user 
      this.props.dispatch(authenticateUser(user))
    }
}

    render(){
      return (<Router>

        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/form" component={Form}/>
        </div>
      </Router>
      );
  }
  
}
function mapStateToProps(state){
  return {
    auth:state.auth
  }
}
export default connect(mapStateToProps)(App)
