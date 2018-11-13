import React from 'react'
import { connect } from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'
import { getDecks } from '../actions/items'
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
  render() {
    // debugger
    const deckListing = () => this.props.currentDecks.map(deck => <DeckListing key={`Deck-${deck.id}`} deck={deck}/>)
    const { addDeckFormVisible } = this.state
    return (
      <Segment >
        {!addDeckFormVisible && <Button onClick={this.toggleDeckFormVisiblity}>Add Deck</Button>}
        {addDeckFormVisible ? <AddDeckForm toggleVisibility={this.toggleDeckFormVisiblity}/> : this.props.currentDecks.length > 0 ? deckListing() : <h3>No Decks to Speak of!!</h3>}
      </Segment>
    )
  }
}


const mapStateToProps = state => {
  return { 
    currentDecks: state.base.currentDecks,
    currentUser: state.base.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDecks: (userId) => dispatch(getDecks(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer)