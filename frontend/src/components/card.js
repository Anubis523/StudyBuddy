import React from 'react'
import { Container, Menu, Segment, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { selectCard } from '../actions/items'
// import { getDecks } from '../actions/items'
const Card = (props) => {
  // debugger
  const { question, id } = props.card
  return(
    <Segment inverted onClick={() => {props.selectCard(props.card.id)}}>
      <h3>{question}</h3>
      <Button.Group>
        <Button onClick={props.Card}  color='yellow'>Edit</Button>
        <Button onClick={props.Card} color='red'>Delete</Button>
      </Button.Group>
    </Segment>
    )
}

const handleEditToggle = (evt, props) => {

}


const mapDispatchToProps = dispatch => {
  return {selectCard: (id) => dispatch(selectCard(id))}
}

export default connect(null, mapDispatchToProps)(Card)