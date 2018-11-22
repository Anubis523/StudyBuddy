import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { selectDeck, changeInReview, getDecksCards } from '../actions/items'
import * as _reviewActions from '../actions/reviewCardActions'

const DeckReviewItem = props => {
  const { name, description } = props.deck
  return (
  <Segment inverted>
    <h1>{name}</h1>
    <p>{description}</p>
    <Button color='teal' type='button' onClick={() =>handleClick(props)}>Select</Button>
  </Segment>
  )
}

const handleClick = (props) => {
  props.selectDeck(props.deck)
  let id = props.deck.id
  props.getDecksCards(id)
  props.changeInReview(true)
  // debugger
} 

const mapDispatchToProps = dispatch => {
  return {
    selectDeck: (deck) => dispatch(selectDeck(deck)),
    changeInReview: (bool) => dispatch(changeInReview(bool)),
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId)),
    setReviewCard: (card) => dispatch(_reviewActions.setReviewCard(card))
  }
}

const mapStateToProps = state =>  {
  return {
    currentCards: state.base.currentCards
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckReviewItem)