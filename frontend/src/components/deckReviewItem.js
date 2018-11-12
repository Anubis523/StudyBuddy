import React from 'react'
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { selectDeck, changeInReview, getDecksCards } from '../actions/items'


const DeckReviewItem = props => {
  const { name, description } = props.deck
  return (
  <Segment inverted>
    <h1>{name}</h1>
    <p>{description}</p>
    <Button color='teal' type='button' onClick={(evt) =>{handleClick(evt, props)}}>Select</Button>
  </Segment>
  )
}

const handleClick = (evt, props) => {
  props.selectDeck(props.deck)
  props.getDecksCards(props.deck.id)
  props.changeInReview(true)
} 
const mapDispatchToProps = dispatch => {
  return {
    selectDeck: (deck) => dispatch(selectDeck(deck)),
    changeInReview: (bool) => dispatch(changeInReview(bool)),
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId))
  }
}
export default connect(null, mapDispatchToProps)(DeckReviewItem)