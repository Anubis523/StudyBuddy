import React from 'react'
import { connect } from 'react-redux'
import { Container, Menu, Segment, Button } from 'semantic-ui-react'
import Card from '../components/card'
import AddCardForm from '../components/forms/addCardForm'
import { getDecksCards } from '../actions/items'

class CardContainer extends React.Component {
  state = {
    formVisible: false
  }

  handleAddCardButtonClick = (evt) => {
    this.setState({formVisible: !this.state.formVisible})
    this.props.getDecksCards(this.props.selectedDeck)
  }

  toggleFormVisibility = () => {
    this.setState({formVisible: !this.state.formVisible})
  }

  render(){
    const flashCards = () => this.props.currentCards.map(card => <Card key={`Card-${card.id}`} card={card}/>)

    const { formVisible } = this.state
    const { selectedDeck } = this.props
    let visibleButton = (Object.values(selectedDeck).length  > 0 )
    return (
      <Segment>
        { visibleButton && !formVisible && <Button color='blue' onClick={this.handleAddCardButtonClick}>Add Card</Button>}
        {formVisible ? <AddCardForm toggleVisibility={this.toggleFormVisibility}/> :  flashCards()}
        CardContainer Pending
      </Segment>
  )}
}

const mapStateToProps = state =>  {
  return { 
    currentCards: state.currentCards,
    selectedDeck: state.selectedDeck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)