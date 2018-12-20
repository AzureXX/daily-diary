import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from "moment"
export class Diary extends Component {
  static propTypes = {
    
  }
  componentDidMount = () => {
    console.log(moment().format("DD,MM,YYYY"));
  } 
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Diary)
