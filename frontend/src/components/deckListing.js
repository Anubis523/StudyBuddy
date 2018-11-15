import React from 'react'
import { connect } from 'react-redux'
import * as _actions from '../actions/items'
import { Button, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class DeckListing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listingVisible: true
    }
  }

  handleButtonGroup = (evt) => {
    evt.preventDefault()
    let name = evt.target.name
    const { selectDeck, removeDeck, deck, changeDeckFormMode, toggleFormVisibility } = this.props
    switch (name) {
      case 'edit':
        selectDeck(deck)
        changeDeckFormMode('EDIT')
        toggleFormVisibility()
        break

      case 'delete':
       removeDeck(deck.id)
        break

      default:
        break
    }
  }

  handleCardOptions = (evt) => {
    this.props.getDecksCards(this.props.deck.id)
    this.props.selectDeck(this.props.deck)
    this.props.changeTab('CARDS')
  }
 //testing remote change
  render() {
    const { deck } = this.props
    const { listingVisible } = this.state
    return (
      <>{listingVisible && <Segment inverted >
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
          <Button color='blue' onClick={this.handleCardOptions}>Card Options</Button>
          <Button.Group floated='right'>
            <Button color='yellow' name='edit' onClick={this.handleButtonGroup}>Edit</Button>
            <Button color='red' name='delete' onClick={this.handleButtonGroup}>Delete</Button>
          </Button.Group>
        </Segment>}
    </>)
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}

const mapDispatchToProps = dispatch => {
  return { 
    selectDeck: (deck) => dispatch(_actions.selectDeck(deck)), 
    getDecks: (userId) => dispatch(_actions.getDecks(userId)),
    getDecksCards: (deckId) => dispatch(_actions.getDecksCards(deckId)),
    removeDeck: (deckId) => dispatch(_actions.removeDeck(deckId)),
    changeTab: (tabName) => dispatch(_actions.changeTab(tabName)),
    changeDeckFormMode: (mode) => dispatch(_actions.changeDeckFormMode(mode))
  }
}   

export default connect(mapStateToProps, mapDispatchToProps)(DeckListing)
