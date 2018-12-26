import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentDashboard } from '../../actions/dashboardActions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getCurrentDashboard();
  }

  render() {

    const { user } = this.props.auth;
    const { dashboard, loading } = this.props.dashboard;

    let dashboardContent;

    if (dashboard === null || loading) {
      dashboardContent = <h4>Loading</h4>
    } else {
      dashboardContent = <h4>{user.firstname}'s Dashboard</h4>
    }

    return (
      <div className="dash">
        {dashboardContent}
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentDashboard: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentDashboard })(Dashboard);