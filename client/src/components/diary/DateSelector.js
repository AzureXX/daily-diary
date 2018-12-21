import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
export class DateSelector extends Component {
  state = {
    editDate: true
  };
  static propTypes = {};

  render() {
    return (
      <div className="App">
        <p>Current Date</p>
        {this.state.editDate && <DatePicker inline />}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateSelector);
