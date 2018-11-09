import { connect } from 'react-redux'
import { Radio, Button, Segment, Divider, Dropdown, Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import { addCard, getDecksCards } from '../../actions/items'

class AddCardForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      rightAnswer: '',
      type: null,
      'multi-0': '',
      'multi-1': '',
      'multi-2': '',
      'multi-3': '',
      question: ''
    }
    this.initialState = {...this.state}
  }

  handleInputChange = (evt) => {
    evt.preventDefault()
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSelectChange = (evt) => {
    evt.preventDefault()
    this.setState({type: evt.target.parentElement.textContent})
  }

  handleRadioChange = (evt) => {
    let rightAnswer = evt.target.parentElement.getElementsByTagName('input')[0].value
    this.setState({ rightAnswer })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    // post logic for entering in new card
    const answers = []
    
    console.log('submitted')
    const { type, question } = this.state
    let rightAnswer = parseInt(this.state.rightAnswer)

    if (type === 'Multiple Choice'){
      for (let i = 0; i < 4; i++) {
        answers.push(this.state[`multi-${i}`])
      }
    } else if ( type === 'True or False') {
      answers.push(this.state['multi-0'])
      answers.push(this.state['multi-1'])
    } else if ( type === 'Fill In The Blank') {
      answers.push(this.state['multi-0'])
    }
    this.props.addCard(this.props.selectedDeck.id, {flashCard: {type, question, rightAnswer, answers}})
    this.props.getDecksCards(this.props.selectedDeck.id)
    this.props.toggleVisibility()
  }

  resetInputs = (evt) => {
    // logic for resetting all of the input fields
  }

  multipleChoice = () =>{ 
    const answers = []
    for (let i = 0; i < 4; i ++)
    {
      answers.push(<Form.TextArea label={`Answer# ${i+1}`} key={`multi-${i}`} name={`multi-${i}`} placeholder={`answer-${i}`} onChange={this.handleInputChange}/>)
    }
    return answers
  }

  render() {
    let answers = [...this.multipleChoice()]
    const { type, rightAnswer } = this.state
    const answerOne = this.state['multi-0']
    const answerTwo = this.state['multi-1']
    const answerThree = this.state['multi-2']
    const answerFour = this.state['multi-3']
    const multipleChoiceAnswers = 
      <>
        <label>Answers</label>
        <Form.Group widths='equal'>{answers[0]}{answers[1]}</Form.Group>
        <Form.Group widths='equal'>{answers[2]}{answers[3]}</Form.Group>
        <label>The right answer is {rightAnswer.length < 1 ? 'not yet selected' : parseInt(rightAnswer)+1}</label>

        <Form.Group>
          {answerOne.length > 0 && <Form.Field>
              <Radio label="Choice 1" name='rightAnswer' checked={rightAnswer === '0'} value={0} onChange={this.handleRadioChange} />
            </Form.Field>}
            {answerTwo.length > 0 && <Form.Field>
              <Radio label="Choice 2" name='rightAnswer' checked={rightAnswer === '1'} value={1} onChange={this.handleRadioChange} />
            </Form.Field>}
            {answerThree.length > 0 && <Form.Field>
              <Radio label="Choice 3" name='rightAnswer' checked={rightAnswer === '2'} value={2} onChange={this.handleRadioChange} />
            </Form.Field>}
            {answerFour.length > 0 && <Form.Field>
              <Radio label="Choice 4" name='rightAnswer' checked={rightAnswer === '3'} value={3} onChange={this.handleRadioChange} />
            </Form.Field>}
          
        </Form.Group>
      </>

    return (
      <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <Form.Field>
            <Dropdown onChange={this.handleSelectChange} options={types}/>
          </Form.Field>
          {type !== null && <Form.Field>
            <Form.TextArea label='Question' name='question' onChange={this.handleInputChange} />
          </Form.Field>}
          {type === 'Multiple Choice'
            ? multipleChoiceAnswers
            : type === 'True or False'
                ? <div>True or False Option</div>
                : type === 'Fill In The Blank'
                  ? <di>Fill in the Blank Options</di>
                  : <div>No type chosen</div>}
          <Form.Group>
            <Button disabled={rightAnswer.length < 1} color='blue' value='submit'>Submit Question</Button>
            <Button color='pink' onClick={this.props.toggleVisibility} >Cancel</Button>
          </Form.Group>
        </Form>
      </Segment>
    )
  }
}

const types = [
  {key:'multipleChoice', value:'multipleChoice', text:'Multiple Choice'}, 
  {key:'trueOrFalse', value:'trueOrFalse', text:'True or False'}, 
  {key:'fillInTheBlank', value:'fillInTheBlank', text:'Fill In The Blank'}]

const mapDispatchToProps = dispatch => {
  return { 
    addCard: (deckId, cardBody) => dispatch(addCard(deckId, cardBody)),
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId))
  }
}

const mapStateToProps = state => {
  return { selectedDeck: state.selectedDeck }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardForm)