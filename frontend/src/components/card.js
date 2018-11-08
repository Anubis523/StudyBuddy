import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
// import { getDecks } from '../actions/items'
const Card = (props) => {
  const { question } = props.card
  return(
    <Segment inverted>
      <h3>{question}</h3>
    </Segment>
    )
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(null, mapDispatchToProps)(Card)