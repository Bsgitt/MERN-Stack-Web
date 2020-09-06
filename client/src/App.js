import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/Notfound";
import Profiles from "./components/Profiles";
import Products from "./components/Products";
import { Nav } from "react-bootstrap";
function App() {
  return (
    <>
      <div>
        <div className='my-app'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
              <h3>B store</h3>
            </Link>
            <div
              className='collapes navbar-collapes'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <Link to='/login' className='nav-link mr-3'>
                    Login
                  </Link>
                </li>

                <li className='nav-item '>
                  <Link to='/register' className='nav-link mr-3'>
                    Register
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link to='/profiles' className='nav-link mr-3'>
                    Profile
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link to='/products' className='nav-link mr-3'>
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profiles' component={Profiles} />
            <Route path='/products' component={Products} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
