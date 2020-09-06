import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Longin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
