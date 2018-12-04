import React from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { Segment, Button } from 'semantic-ui-react'
import Card from '../components/card'
import CardFormContainer from './cardFormContainer'
import { getDecksCards, changeFormMode, changeTab } from '../actions/items'
import { addCard } from '../actions/cardFormActions'

class CardContainer extends React.Component {
  state = {
    hideForm: true
  }

  hideForm = () => {
    this.setState({ hideForm: !this.state.hideForm})
  }

  handleHideForm = (hideForm) => {
    this.setState({ hideForm })
  }

  handleAddCardButtonClick = (evt) => {
    this.setState({ hideForm: false })
    this.props.changeFormMode('CREATE')
  }

  handleCancel = (evt) => {
    this.props.changeTab('DECKS')
  }

  render(){
    const { hideForm } = this.state
    const flashCards =  this.props.currentCards.map(card => <Card key={`Card-${card.id}`} handleHideForm={this.handleHideForm} hideForm={this.hideForm} card={card}/>)
    const { selectedDeck } = this.props
    return (<>
    
    {!!selectedDeck.id && <h1>Currently In: "<span>{selectedDeck.name}</span>" Deck</h1>}
    {!hideForm && <CardFormContainer hideForm={this.hideForm}/>}
        {hideForm && <>
          <Button  color='blue' disabled={!this.props.selectedDeck.id} onClick={this.handleAddCardButtonClick}>Add Card</Button>
          <Button color='pink' type='button' onClick={this.handleCancel}>Cancel / Back</Button>
          {flashCards}
        </>}
  </>)}
}

const mapStateToProps = state =>  {
  return { 
    currentCards: state.base.currentCards,
    selectedDeck: state.base.selectedDeck,
    selectedCard: state.base.selectedCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId)),
    addCard: (deckId, cardBody) => dispatch(addCard(deckId, cardBody)),
    changeFormMode: (mode) => dispatch(changeFormMode(mode)),
    changeTab: (tabName) => dispatch(changeTab(tabName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)