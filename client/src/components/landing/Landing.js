import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Landing extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
