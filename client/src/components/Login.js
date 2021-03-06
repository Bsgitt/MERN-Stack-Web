import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); //push to dashboard page
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className='container'>
        <div className='"form-group"'>
          <div className='col s12' style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b>
            </h4>
            <p className='grey-text text-darken-1'>
              Already have an account? <Link to='/register'>Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className='col-md-6 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                className='form-control'
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id='email'
                type='email'
              />
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                className='form-control'
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id='password'
                type='password'
              />
            </div>

            <div className='col s12' style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                type='submit'
                className='btn btn-success'
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
