import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { signupUser } from "../../actions/userActions";

export class Signup extends Component {
  state = {
    email: "",
    password: "",
    password2:""
  };
  static propTypes = {
    signupUser: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    this.props.signupUser(this.state)
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
            id="email"
            placeholder="example@site.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password2">Repeat Password</Label>
          <Input
            onChange={this.onChange}
            value={this.state.password2}
            type="password"
            name="password2"
            id="password2"
            placeholder="repeat password"
          />
        </FormGroup>
        <Button onClick={this.onClick}>Signup</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
