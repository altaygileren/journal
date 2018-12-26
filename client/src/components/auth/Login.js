import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import classnames from 'classnames';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  }


  render() {

    const { errors } = this.state;

    return (
      <div className="containPages">
        <Grid>
          <Row>
            <h1 className="userFormInputHeader">Login</h1>
          </Row>
          <Row>
            <form onSubmit={this.onSubmit}>
              <input
                className={classnames('userFormInput', {
                  'errorForm': errors.email
                })}
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (<div className="errorIssue">{errors.email}</div>)}
              <br />
              <input
                className={classnames('userFormInput', {
                  'errorForm': errors.password
                })}
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (<div className="errorIssue">{errors.password}</div>)}
              <br />
              <button className="userFormInputBtn">Log in</button>
            </form>
          </Row>
        </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);