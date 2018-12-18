import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { loginUser } from "../../actions/userActions";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  static propTypes = {
    loginUser: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={this.onChange}
            value={this.state.email}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@site.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"
          />
        </FormGroup>
        <Button onClick={this.onClick}>Login</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
