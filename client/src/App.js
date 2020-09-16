import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/RegisterCom";
import NotFound from "./components/Notfound";
import Profiles from "./components/Profiles";
import Products from "./components/Products";
import store from "./store/store";
import { Provider } from "react-redux";
import Dashboard from "./components/dashboard";
//decode /setToken
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";
//privateRouter
import PrivateRoute from "./components/private-route/PrivateRoute";

//Check token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //decode token and get users info and exp
  const decode = jwt_decode(token);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decode));
  //Check for exp token
  const currentTime = Date.now() / 1000; //to get in milliseconds
  if (decode.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
    //Redirect to login
    window.localStorage.href = "./login";
  }
}
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
          <Provider store={store}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route path='/profiles' component={Profiles} />
              <Route exact path='/products' component={Products} />
              <Switch>
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
              </Switch>
              <Route component={NotFound} />
            </Switch>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
