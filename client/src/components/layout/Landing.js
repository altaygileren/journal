import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  
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

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,

})

export default connect(mapStateToProps)(Landing);