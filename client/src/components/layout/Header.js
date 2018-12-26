import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


class Header extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <Nav pullRight>
          <NavItem onClick={this.onLogoutClick.bind(this)} eventKey={1} href="/login">
            <button className="logoutBtn">Logout</button>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/myposts">
            <p className="test">Hey! {user.firstname}</p>
          </NavItem>
        </Nav>
      </div>
    )

    const guestLinks = (
      <div>
        <Nav pullRight>
          <NavItem eventKey={1} href="/login">
            Login
      </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/register">
            Sign up
      </NavItem>
        </Nav>
      </div>
    )

    return (
      <div>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="headerLogo">Journal</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/posts">
                Posts
              </NavItem>
            </Nav>
            {isAuthenticated ? authLinks : guestLinks}
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps, { logoutUser })(Header);