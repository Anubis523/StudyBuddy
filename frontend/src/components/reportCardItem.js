// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'

class ReportCardItem extends Component {
  render(){
    return(<>reportItem</>)
  }
}
const mapStateToProps = state => {
  return {
    
  }
}
export default connect(mapStateToProps)(ReportCardItem)