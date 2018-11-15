// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'

class ReportContainer extends React.Component {

  handleClick = (evt) => {
    debugger
    console.log('event target is: ', evt.target)
  }

  render(){
    return (<>
      <Segment inverted>
          <Button name='report-by-deck' type='button' color='violet' onClick={this.handleClick}>Report By Deck</Button>
          <Button disabled type='button' color='violet'>Report By Category</Button>
      </Segment>
    </>)
  }
}

export default connect(null)(ReportContainer)