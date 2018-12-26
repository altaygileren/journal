import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landingImg">
        <div className="blackBackground">
          <Row>
            <div className="userChoiceButtons">
              <Link to="/login"><button className="loginButton buttonStyle space">Log in</button></Link>
              <Link to="/register"><button className="registerButton buttonStyle space">Register</button></Link>
            </div>
          </Row>
          <Row>
            <div className="landingPageText">
              <p>A place to express yourself</p>
            </div>
          </Row>
        </div>
      </div>
    )
  }
}
