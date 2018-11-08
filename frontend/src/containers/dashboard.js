import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { getDecks, getDecksCards } from '../actions/items'
import DeckContainer from '../containers/deckContainer'
import CardContainer from '../containers/cardContainer'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: 'CARDS'
    }
  }

  dummy = () => {console.log('make a default action creator that replaces cards info with that of cardpool')}

  changeTab = (e, { name }) => {
    const { currentUser, getDecks, getDecksCards, selectedDeck} = this.props
    this.setState({ activeItem: name }, () => {
      switch(this.state.activeItem) {
        case 'CARDS':
          selectedDeck? getDecksCards(selectedDeck.id) : this.dummy()
          break

        case 'DECKS':
          getDecks(currentUser.id)
          break

        default:
          return null
      }
    })
  }



  render(){
    const { activeItem } = this.state
    return(
      <Container>
        <Menu attached="top" tabular>
          <Menu.Item name='CARDS' active={activeItem === 'CARDS'} onClick={this.changeTab}/>
          <Menu.Item name='DECKS' active={activeItem === 'DECKS'} onClick={this.changeTab}/>
        </Menu>
        <Segment>
          {activeItem === 'CARDS'&& <CardContainer/>}
          {activeItem === 'DECKS'&& <DeckContainer/>}
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { authed: state.isAuthed, currentUser: state.currentUser, selectedDeck: state.selectedDeck}
}
//return {changeUser: (id) => dispatch(changeUser(id))}
const mapDispatchToProps = dispatch => {
  return { 
    getDecks: (id) => dispatch(getDecks(id)),
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)