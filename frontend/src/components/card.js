import React from 'react'
// eslint-disable-next-line
import { Segment, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { selectCard, changeCardForm } from '../actions/cardFormActions'
import * as base from '../actions/items'
import { deleteCard } from '../actions/cardActions'

const Card = (props) => {
  // eslint-disable-next-line
  const { question, id } = props.card
  return(
    <Segment inverted>
      <h3>{question}</h3>
      <Button.Group>
        <Button onClick={(evt) => {handleEditToggle(evt, props)}}  color='yellow'>Edit</Button>
        <Button onClick={() => {handleDelete(props, id)}} color='red'>Delete</Button>
      </Button.Group>
    </Segment>
    )
}

const handleDelete = (props, id) => {
  props.deleteCard(id)
}

const handleEditToggle = (evt, props) => {
  props.selectCard(props.card.id)
  props.changeCardForm(props.card.id)
  props.hideForm()
  props.changeFormMode('EDIT')
}

const mapStateToProps = state => {
  return { selectedCard: state.base.selectedCard }
}


const mapDispatchToProps = dispatch => {
  return {
    selectCard: (id) => dispatch(selectCard(id)),
    changeCardForm: (id) => dispatch(changeCardForm(id)),
    changeFormMode: (mode) => dispatch(base.changeFormMode(mode)),
    deleteCard: (id) => dispatch(deleteCard(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)