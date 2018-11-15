import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { correctCard } from '../actions/cardActions'

class ReviewCard extends React.Component {

  state = {
    timesToAnswer: 1,
    timesAttempted: this.props.card.timesAttempted,
    timesCorrect:  this.props.card.timesCorrect,
    answer: ''
  }

  checkIfRight = (evt ,idx) => {
    evt.preventDefault()
    let timesAnswered = this.state.timesAttempted
    let timesCorrect = this.state.timesCorrect
    const { rightAnswer, answers } = this.props.card
    debugger
    this.setState({timesAttempted: ++timesAnswered}, () => {
      timesCorrect = idx === rightAnswer ? ++timesCorrect : timesCorrect
      this.setState({ timesCorrect }, () => {
        this.setState({ answer: answers[idx] })}
    )})
  }

  handleFillInTheBlank = (evt) => {
    evt.preventDefault()
    debugger
    this.setState({ answer: evt.target.value })
  }

  render() {
    const { question, type, answers, rightAnswer } = this.props.card
    let correct = answers[rightAnswer]
    const {timesCorrect, timesAttempted, answer } = this.state
    const answerButtons = this.props.card.answers.map((answer, idx) => {
      if(!!answer){return (
        <>
          <Button key={`answerButton-${idx}`} width={8} onClick={(evt)=> {this.checkIfRight(evt, idx)}}>{answer}</Button>
        </>
        )}
      else { return null}
    })

    return (
      <Segment inverted>
        <h2>{ type }</h2>
        <h3>{question}</h3>
        {!!answer && <h4>Your answer was: <span>{answer}</span></h4>}
        {!!answer && <h4>The Right answer was: <span>{correct}</span></h4>}
        {type !== 'Fill in the Blank' && answerButtons }
        {type === 'Fill in the Blank' && <Form.Input type='text' onChange={this.handleFillInTheBlank}/>}
        <p><span>{timesCorrect}</span> out of <span>{timesAttempted}</span> times was answered correctly.</p>
      </Segment>
  )}
}

const mapDispatchToProps = dispatch => {
  return {
    correctCard: (cardId, right) => dispatch(correctCard(cardId, right))
  }
}

export default connect(null, mapDispatchToProps)(ReviewCard)