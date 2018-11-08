import React from 'react'
import { connect } from 'react-redux'
import AddCardForm from './forms/addCardForm'
import { selectDeck, editDeck, getDecksCards, removeDeck } from '../actions/items'
import { Container, Button, Segment, Divider} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class DeckListing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cardFormVisible: false
    }
  }
  handleButtonGroup = (evt) => {
    evt.preventDefault()
    let name = evt.target.name
    // debugger
    switch (name) {
      case 'select':
        this.props.selectDeck(this.props.deck)
        this.props.getDecksCards(this.props.deck.id)
        break

      case 'edit':
        this.props.editDeck(this.props.deck)
        break

      case 'delete':
        this.props.removeDeck(this.props.deck.id)
        break

      default:
        break
    }
  }

  handleAddCardPrompt = (evt) => {
    this.setState({cardFormVisible: !this.state.cardFormVisible})
  }

  render() {
    const { deck } = this.props
    const { cardFormVisible } = this.state
    return (
        <Segment inverted>
          <Container>
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
          </Container>
          <Button color='blue' onClick={this.handleAddCardPrompt}>Add Cards</Button>
          <Button.Group floated='right'>
            <Button color='green' name='select' onClick={this.handleButtonGroup}>Select</Button>
            <Button color='yellow' name='edit' onClick={this.handleButtonGroup}>Edit</Button>
            <Button color='red' name='delete' onClick={this.handleButtonGroup}>Delete</Button>
          </Button.Group>
          {cardFormVisible && <><AddCardForm/></>}
        </Segment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return { 
    selectDeck: (deck) => dispatch(selectDeck(deck)), 
    editDeck: (deck) => dispatch(editDeck(deck)),
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId)),
    removeDeck: (deckId) => dispatch(removeDeck(deckId))
  }
}   

export default connect(null, mapDispatchToProps)(DeckListing)
