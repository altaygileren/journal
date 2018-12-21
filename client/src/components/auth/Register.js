import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import classnames from 'classnames';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
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

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    axios.post('/api/users/register', newUser)
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
            <h1 className="userFormInputHeader">Registration</h1>
          </Row>
          <Row>
            <form onSubmit={this.onSubmit}>
              <input
                className={classnames('userFormInput', {
                  'errorForm': errors.firstname
                })}
                type="text"
                placeholder="First name"
                name="firstname"
                value={this.state.firstname}
                onChange={this.onChange}
              />
              <br />
              <input
                className="userFormInput"
                type="text"
                placeholder="Last name"
                name="lastname"
                value={this.state.lastname}
                onChange={this.onChange}
              />
              <br />
              <input
                className="userFormInput"
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <br />
              <input
                className="userFormInput"
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <br />
              <input
                className="userFormInput"
                type="password"
                placeholder="Password confirmation"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
              <br />
              <button className="userFormInputBtn">Register</button>
            </form>
          </Row>
        </Grid>
      </div>
    )
  }
}
