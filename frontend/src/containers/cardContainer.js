import React from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { Container, Menu, Segment, Button } from 'semantic-ui-react'
import Card from '../components/card'
import CardFormContainer from './cardFormContainer'
import { getDecksCards } from '../actions/items'
import { addCard } from '../actions/cardFormActions'
// import MultipleChoiceForm from '../components/forms/multipleChoiceForm'

class CardContainer extends React.Component {
  state = {
    formMode: ''
  }

  hideForm = () => {
    this.setState({ hideForm: !this.state.hideForm})
  }
  
  handleAddCardButtonClick = (evt) => {
    this.setState({ hideForm: false })
  }

  render(){
    const { hideForm } = this.state
    const flashCards =  this.props.currentCards.map(card => <Card key={`Card-${card.id}`} hideForm={this.hideForm} card={card}/>)

    return (<>
    {!hideForm && <CardFormContainer hideForm={this.hideForm}/>}
      <Segment>
        {hideForm && <>
          <Button  color='blue' disabled={!this.props.selectedDeck.id} onClick={this.handleAddCardButtonClick}>Add Card</Button>
          {flashCards}
        </>}
      </Segment>
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
    addCard: (deckId, cardBody) => dispatch(addCard(deckId, cardBody))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)