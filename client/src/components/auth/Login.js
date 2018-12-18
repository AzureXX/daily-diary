import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { loginUser } from "../../actions/userActions";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  static propTypes = {
    loginUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (this.props.isAuth) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state, () => {
      this.props.history.push("/")
    });
  };

  render() {
    return (
      <Form onSubmit={ (e) => this.onSubmit(e)}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            invalid={this.props.errors.email}
            onChange={this.onChange}
            value={this.state.email}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@site.com"
          />
          {this.props.errors.email && (
            <FormFeedback>{this.props.errors.email}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            invalid={this.props.errors.password}
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"
          />
          {this.props.errors.password && (
            <FormFeedback>{this.props.errors.password}</FormFeedback>
          )}
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  errors: state.errors
});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
