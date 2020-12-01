import react from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


class Navbar extends react.Component{

    render(){

        return(<div className="navbar-container"><ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul></div>)
    }

}

export default Navbar