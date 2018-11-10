import React from 'react'
import { connect } from 'react-redux'
import { Container, Menu, Segment, Button } from 'semantic-ui-react'
import Card from '../components/card'
import CardForm from '../components/forms/cardForm'
import EditCardForm from '../components/forms/editCardForm'
import CardFormContainer from './cardFormContainer'
import { addCard, getDecksCards } from '../actions/items'
// import MultipleChoiceForm from '../components/forms/multipleChoiceForm'

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
    this.setValuesNull()
    this.setState({addCardFormVisible: !this.state.addCardFormVisible})
    this.props.getDecksCards(this.props.selectedDeck)
  }

  toggleAddFormVisibility = () => {
    this.setState({addCardFormVisible: !this.state.addCardFormVisible}, 
      () => {
        if(!this.state.addCardFormVisible) {
          this.setValuesNull()
        }
    })
  }

  toggleEditFormVisibility = () => {
    this.setState({editCardFormVisible: !this.state.editCardFormVisible}, 
      () => {this.setState({addCardFormVisible: !this.state.addCardFormVisible})})
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
    this.toggleAddFormVisibility()
  }

  handleEditSubmit = evt => {
    debugger
    console.log('testing')
  }

  render(){
    const flashCards =  this.props.currentCards.map(card => <Card key={`Card-${card.id}`} card={card} handleEditToggle={this.toggleEditFormVisibility}/>)

    const { addCardFormVisible, editCardFormVisible } = this.state
    const { selectedDeck } = this.props
    let visibleButton = (Object.values(selectedDeck).length  > 0 )
    
    return (<>
    <CardFormContainer/>
      <Segment>
        { visibleButton && !addCardFormVisible  && <Button color='blue' onClick={this.handleAddCardButtonClick}>Add Card</Button>}
        {addCardFormVisible && !editCardFormVisible
          ? <CardForm 
          toggleVisibility={this.toggleAddFormVisibility}
          handleTypeChange = {this.handleTypeChange}
          handleInputChange={this.handleInputChange}
          handleRightAnswerChange={this.handleRightAnswerChange}
          handleSubmit={this.handleSubmit}
          flashCard={this.passDefaultFlashCard()}
          answerCount={this.answerCount()}
          /> 
          :  flashCards
        }
        { editCardFormVisible &&
          <EditCardForm
          toggleVisibility={this.toggleEditFormVisibility}
          handleTypeChange = {this.handleTypeChange}
          handleInputChange={this.handleInputChange}
          handleRightAnswerChange={this.handleRightAnswerChange}
          handleSubmit={this.handleEditSubmit}
          answerCount={this.answerCount()}
          />
          }
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