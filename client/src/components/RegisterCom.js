import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newUser);
    // send props history
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className='container'>
        <div className='"form-group"'>
          <div className='col s12' style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className='grey-text text-darken-1'>
              Already have an account? <Link to='/login'>Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className='col-md-6 mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                className='form-control'
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id='name'
                type='text'
              />
            </div>
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
            <div className='col-md-6 mb-3'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                className='form-control'
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id='password2'
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
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
