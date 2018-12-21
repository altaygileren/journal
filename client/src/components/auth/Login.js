import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import axios from 'axios';

export default class Login extends Component {
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

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const loginUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/api/users/login', loginUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({
        errors: err.response.data
      }));
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
