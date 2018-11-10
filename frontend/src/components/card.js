import React from 'react'
import { Container, Menu, Segment, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { selectCard, changeCardForm } from '../actions/items'
// import { getDecks } from '../actions/items'
const Card = (props) => {
  // debugger
  const { question, id } = props.card
  return(
    <Segment inverted>
      <h3>{question}</h3>
      <Button.Group>
        <Button onClick={(evt) => {handleEditToggle(evt, props)}}  color='yellow'>Edit</Button>
        <Button onClick={props.Card} color='red'>Delete</Button>
      </Button.Group>
    </Segment>
    )
}

const handleEditToggle = (evt, props) => {
  props.selectCard(props.card.id)
  props.changeCardForm(props.card.id)
}

const mapStateToProps = state => {
  return { selectedCard: state.base.selectedCard }
}


const mapDispatchToProps = dispatch => {
  return {
    selectCard: (id) => dispatch(selectCard(id)),
    changeCardForm: (id) => dispatch(changeCardForm(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)