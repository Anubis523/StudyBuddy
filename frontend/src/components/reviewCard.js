import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { correctCard } from '../actions/cardActions'

class ReviewCard extends React.Component {
  state = {
    answer: '',
    fillInAnswer: ''
  }
  handleFillInTheBlank = (evt) => {
    evt.preventDefault()
    let fillInAnswer = evt.target.value
    this.setState({ fillInAnswer })
    evt.target.value = ''
  }

  handleFillInSubmit = (evt) => {
    evt.preventDefault()
    this.setState({ answer: this.state.fillInAnswer})
    this.setState({ fillInAnswer: '' })
    this.props.revealAnswer()
  }

  handleAnswerButton = (evt, idx) => {
    const { reviewCard } = this.props
    const { answers } = reviewCard
    let answer = answers[idx]
    this.setState({ answer })
    this.props.revealAnswer()
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
      this.setState({ answer: ''}, () => {
        this.setState({ fillInAnswer: ''})
      })
    }
    return !(this.state === nextState)
  }

  render() {
    const { answer, fillInAnswer } = this.state
    const { question, type } = this.props.reviewCard
    const answerButtons = this.props.reviewCard.answers.map((answer, idx) => {
      if(!!answer){return (
        <>
          <Button key={`answerButton-${idx}`} width={8} onClick={(evt)=> {this.handleAnswerButton(evt, idx)}}>{answer}</Button>
        </>
        )}
      else { return null}
    })

    return (
      <Segment inverted>
        <h2>{ type }</h2>
        <h3>{question}</h3>
        <h4>Your answer was: <span>{answer}</span></h4>
        {type !== 'Fill in the Blank' && answerButtons }
        {type === 'Fill in the Blank' && 
          <Form onSubmit={this.handleFillInSubmit}>
            <Form.Input type='text' value={fillInAnswer} onChange={this.handleFillInTheBlank}/>
            <Button type='submit'>Submit</Button>
          </Form>}
      </Segment>
  )}
}

const mapStateToProps = state => {
  return { 
    reviewCard: state.reviewCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    correctCard: (cardId, right) => dispatch(correctCard(cardId, right))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard)