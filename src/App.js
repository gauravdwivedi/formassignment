import react from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';



class App extends react.Component{

    render(){
      return (<Router>

        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      </Router>
      );
  }
  
}

export default App;
