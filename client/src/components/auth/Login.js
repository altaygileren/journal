import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
    console.log(loginUser);
  }


  render() {
    return (
      <div className="containPages">
        <Grid>
          <Row>
            <h1 className="userFormInputHeader">Login</h1>
          </Row>
          <Row>
            <form onSubmit={this.onSubmit}>
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
              <button className="userFormInputBtn">Log in</button>
            </form>
          </Row>
        </Grid>
      </div>
    )
  }
}
