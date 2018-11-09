import React from 'react'
import { connect } from 'react-redux'
import { selectDeck, editDeck, getDecks, getDecksCards, removeDeck, changeTab } from '../actions/items'
import { Container, Button, Segment } from 'semantic-ui-react'
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
    const { editDeck, removeDeck, deck } = this.props
    switch (name) {
      case 'edit':
        editDeck(deck) //logic pending
        break

      case 'delete':
       removeDeck(deck.id)
       this.setState({listingVisible: false})
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

  render() {
    const { deck } = this.props
    const { listingVisible } = this.state
    return (
      <>{listingVisible && <Segment inverted onClick={true}>
          <Container>
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
          </Container>
          <Button color='blue' onClick={this.handleCardOptions}>Card Options</Button>
          <Button.Group floated='right'>
            <Button color='yellow' name='edit' onClick={this.handleButtonGroup}>Edit</Button>
            <Button color='red' name='delete' onClick={this.handleButtonGroup}>Delete</Button>
          </Button.Group>
        </Segment>}</>
    )
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}

const mapDispatchToProps = dispatch => {
  return { 
    selectDeck: (deck) => dispatch(selectDeck(deck)), 
    editDeck: (deck) => dispatch(editDeck(deck)),
    getDecks: (userId) => dispatch(getDecks(userId)),
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId)),
    removeDeck: (deckId) => dispatch(removeDeck(deckId)),
    changeTab: (tabName) => dispatch(changeTab(tabName))
  }
}   

export default connect(mapStateToProps, mapDispatchToProps)(DeckListing)
