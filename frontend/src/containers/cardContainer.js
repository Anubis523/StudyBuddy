import React from 'react'
import { connect } from 'react-redux'
import { Container, Menu, Segment, Button } from 'semantic-ui-react'
import Card from '../components/card'
import CardForm from '../components/forms/cardForm'
import EditCardForm from '../components/forms/editCardForm'
import { addCard, getDecksCards } from '../actions/items'

class CardContainer extends React.Component {
  state = {
    addCardFormVisible: false,
    editCardFormVisible: false,
    // the newCardState fields
    rightAnswer: '',
    type: null,
    'multi-0': '',
    'multi-1': '',
    'multi-2': '',
    'multi-3': '',
    question: '',
    // used to dummy proof the multiple choice
    answerCount: 0
  }

  passDefaultFlashCard = () => {
    const { rightAnswer , question, type } = this.state
    const flashCard = { rightAnswer, question, type}
    for (let i = 0; i < 4; i++) {
      flashCard[`multi-${i}`] = this.state[`multi-${i}`]
    }
    return flashCard
  }

  setValuesNull = () => {
    const initialState = {
      rightAnswer: '',
      type: null,
      'multi-0': '',
      'multi-1': '',
      'multi-2': '',
      'multi-3': '',
      question: ''
    }
    for (let key in initialState){
    this.setState({[key]: initialState[key]})
    }
  }

  answerCount = () => {
    let count = 0
    for(let i = 0; i < 4; i ++){
      if (this.state[`multi-${i}`].length > 0) {
        count++
      }
    }
    return count
  }

  // used for the flashCardType radio buttons
  handleTypeChange = (evt) => { 
    evt.preventDefault()
    this.setState({type: evt.target.textContent})
  }

  handleRightAnswerChange = (evt) => {
    evt.preventDefault()
    this.setState({ rightAnswer: evt.target.parentElement.getElementsByTagName('input')[0].value })
  }

  // handles most other onChanges for input
  handleInputChange = (evt) => {
    evt.preventDefault()
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleAddCardButtonClick = (evt) => {
    this.setState({addCardFormVisible: !this.state.addCardFormVisible})
    this.props.getDecksCards(this.props.selectedDeck)
  }

  toggleFormVisibility = () => {
    this.setState({addCardFormVisible: !this.state.addCardFormVisible}, 
      () => {
          if(!this.state.addCardFormVisible) {
            this.setValuesNull()
          }
        }
      )
    
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    // post logic for entering in new card
    const answers = []
    
    const { type, question } = this.state
    let rightAnswer = parseInt(this.state.rightAnswer) // starts out as a string needed parsing

    if (type === 'Multiple Choice'){
      for (let i = 0; i < 4; i++) {
        answers.push(this.state[`multi-${i}`])
      }
    } else if ( type === 'True or False') {
      answers.push(this.state['multi-0'])
      answers.push(this.state['multi-1'])
    } else if ( type === 'Fill in the Blank') {
      answers.push(this.state['multi-0'])
    }
    this.props.addCard(this.props.selectedDeck.id, {flashCard: {type, question, rightAnswer, answers}})
    this.props.getDecksCards(this.props.selectedDeck.id)
    this.toggleFormVisibility()
  }

  render(){
    const flashCards =  this.props.currentCards.map(card => <Card key={`Card-${card.id}`} card={card} />)

    const { addCardFormVisible } = this.state
    const { selectedDeck, selectedCard } = this.props
    let visibleButton = (Object.values(selectedDeck).length  > 0 )
    return (
      <Segment>
        { visibleButton && !addCardFormVisible && <Button color='blue' onClick={this.handleAddCardButtonClick}>Add Card</Button>}
        {addCardFormVisible 
          ? <CardForm 
          toggleVisibility={this.toggleFormVisibility}
          handleTypeChange = {this.handleTypeChange}
          handleInputChange={this.handleInputChange}
          handleRightAnswerChange={this.handleRightAnswerChange}
          handleSubmit={this.handleSubmit}
          flashCard={this.passDefaultFlashCard()}
          answerCount={this.answerCount()}
          /> 
          :  flashCards
        }
        {addCardFormVisible && <EditCardForm/>}
      </Segment>
  )}
}

const mapStateToProps = state =>  {
  return { 
    currentCards: state.currentCards,
    selectedDeck: state.selectedDeck,
    selectedCard: state.selectedCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId)),
    addCard: (deckId, cardBody) => dispatch(addCard(deckId, cardBody))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)