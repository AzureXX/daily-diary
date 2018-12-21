import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import DateSelector from "./DateSelector";
export class Diary extends Component {
  static propTypes = {};
  state = {
    customDate: true
  };
  componentDidMount = () => {};
  render() {
    return (
      <div className="App">
        <DateSelector />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Diary);
