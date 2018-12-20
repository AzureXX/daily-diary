import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export class NavBar extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
  };

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onLogoutClick = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            Daily-Diary
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.isAuth ? (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/diary">
                    Diary
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.onLogoutClick}>Logout</NavLink>
                </NavItem>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    Create Account
                  </NavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
