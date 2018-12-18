import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";

import { signupUser } from "../../actions/userActions";

export class Signup extends Component {
  state = {
    email: "",
    password: "",
    password2: ""
  };
  static propTypes = {
    signupUser: PropTypes.func.isRequired
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
    this.props.signupUser(this.state, () => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <Form onSubmit={e => this.onSubmit(e)}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            invalid={this.props.errors.email}
            onChange={this.onChange}
            value={this.state.email}
            type="email"
            name="email"
            id="email"
            placeholder="example@site.com"
          />
          {this.props.errors.email && (
            <FormFeedback>{this.props.errors.email}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            invalid={this.props.errors.password}
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          {this.props.errors.password && (
            <FormFeedback>{this.props.errors.password}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="password2">Repeat Password</Label>
          <Input
            invalid={this.props.errors.password2}
            onChange={this.onChange}
            value={this.state.password2}
            type="password"
            name="password2"
            id="password2"
            placeholder="repeat password"
          />
          {this.props.errors.password2 && (
            <FormFeedback>{this.props.errors.password2}</FormFeedback>
          )}
        </FormGroup>
        <Button onClick={this.onClick}>Signup</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  errors: state.errors
});

const mapDispatchToProps = {
  signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup));
