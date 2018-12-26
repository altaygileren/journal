import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentDashboard } from '../../actions/dashboardActions';
import { Grid, Col, Row } from 'react-bootstrap';

class Dashboardpage extends Component {


  render() {

    const { user } = this.props.auth;

    return (
      <div>
        <Grid>
          <Row>
            <div className="infoDiv">
              <h1>First Name</h1>
              <h3>{user.firstname}</h3>
            </div>
          </Row>
          <Row>
            <div className="infoDiv">
              <h1>Last Name</h1>
              <h3>{user.lastname}</h3>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

Dashboardpage.propTypes = {
  getCurrentDashboard: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentDashboard })(Dashboardpage);