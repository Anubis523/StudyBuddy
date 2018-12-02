import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { getDecks, getDecksCards, changeTab } from '../actions/items'
import DeckContainer from '../containers/deckContainer'
import CardContainer from '../containers/cardContainer'
import ReviewContainer from '../containers/reviewContainer'
import ReportContainer from '../containers/reportContainer'

class Dashboard extends React.Component {

  handleChangeTab = (evt) => {
    evt.preventDefault()
    const { changeTab } = this.props
    changeTab(evt.target.innerText)
    this.handleActiveItem(evt.target.innerText)
  }

  handleActiveItem = (activeItem) => {

    const { currentUser } = this.props
    switch(activeItem) {
      case 'REPORT':
        return <ReportContainer/>

      case 'CARDS':
        return <CardContainer/>

      case 'DECKS':
        getDecks(currentUser.id)
        return <DeckContainer/>

      case 'REVIEW':
        return <ReviewContainer/>

      default:
        break
    }
  }

  render(){
    const { activeItem } = this.props
    return(
      <Segment>
        <Menu attached="top" tabular>
          <Menu.Item name='DECKS' active={activeItem === 'DECKS' || activeItem === 'CARDS'} onClick={this.handleChangeTab}/>
          <Menu.Item name='REVIEW' active={activeItem === 'REVIEW'} onClick={this.handleChangeTab}/>
          <Menu.Item name='REPORT' active={activeItem === 'REPORT'} onClick={this.handleChangeTab}/>
        </Menu>

          {this.handleActiveItem(activeItem)}
      </Segment>
    )}
  }

const mapStateToProps = state => {
  return { 
    authed: state.base.isAuthed, 
    currentUser: state.base.currentUser, 
    selectedDeck: state.base.selectedDeck,
    activeItem: state.base.activeItem
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    getDecks: (id) => dispatch(getDecks(id)),
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId)),
    changeTab: (tabName) => dispatch(changeTab(tabName))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)