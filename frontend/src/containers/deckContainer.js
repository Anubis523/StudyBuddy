import React from 'react'
import { connect } from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'
import * as _actions from '../actions/items'
import DeckListing from '../components/deckListing'
import AddDeckForm from '../components/forms/addDeckForm'
import 'semantic-ui-css/semantic.min.css'

class DeckContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      addDeckFormVisible: false
    }
  }

  componentDidMount(){
    const { getDecks, currentUser } = this.props
    getDecks(currentUser.id)
  }

  toggleDeckFormVisiblity = () => {

    this.setState({addDeckFormVisible: !this.state.addDeckFormVisible})
  }

  handleAddDeckButton = () => {
    this.props.changeDeckFormMode('ADD')
    this.toggleDeckFormVisiblity()
  }
  render() {
    const { selectedDeck } = this.props
    // debugger
    const deckListing = () => this.props.currentDecks.map(deck => <DeckListing key={`Deck-${deck.id}`} toggleFormVisibility={this.toggleDeckFormVisiblity} deck={deck}/>)
    const { addDeckFormVisible } = this.state
    return (<>
        <Segment inverted>
          <Button color='blue' disabled={addDeckFormVisible} onClick={this.handleAddDeckButton}>Add Deck</Button>
        </Segment>
        {addDeckFormVisible ? <AddDeckForm name={selectedDeck.name} description={selectedDeck.description} toggleVisibility={this.toggleDeckFormVisiblity}/> : this.props.currentDecks.length > 0 ? deckListing() : <h3>No Decks to Speak of!!</h3>}
    </>)
  }
}


const mapStateToProps = state => {
  return { 
    currentDecks: state.base.currentDecks,
    currentUser: state.base.currentUser,
    selectedDeck: state.base.selectedDeck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDecks: (userId) => dispatch(_actions.getDecks(userId)),
    changeDeckFormMode: (mode) => dispatch(_actions.changeDeckFormMode(mode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer)