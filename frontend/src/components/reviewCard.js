import React from 'react'
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'

class ReviewCard extends React.Component {

  state = {
    timesCorrect: this.props.card.timesCorrect,
    timesAttempted: this.props.card.timesAttempted,
    timesToAnswer: 1
  }

  checkIfRight = (evt ,idx) => {
    evt.preventDefault()
    let timesAnswered = this.state.timesAttempted
    let timesCorrect = this.state.timesCorrect
    this.setState({timesAttempted: ++timesAnswered}, () => {
      timesCorrect = idx === this.props.card.rightAnswer ? ++timesCorrect : timesCorrect
      this.setState({ timesCorrect })
    })
  }

  render() {
  const { timesCorrect, timesAttempted } = this.state
  const { question, type } = this.props.card
  const answerButtons = this.props.card.answers.map((answer, idx) => {
    if(!!answer){return <Button key={`answerButton-${idx}`} width={8} onClick={(evt)=> {this.checkIfRight(evt, idx)}}>{answer}</Button>}
    else { return null}
  })

  return (
    <Segment inverted>
      <h2>{ type }</h2>
      <h3>{question}</h3>
      {type !== 'Fill in the Blank' && answerButtons }
      <p><span>{timesCorrect}</span> out of <span>{timesAttempted}</span> times was answered correctly.</p>
    </Segment>
  )}
}



const mapDispatchToProps = dispatch => {
  return {
    // needs a dispatch that patches the number of attempts/correct answers
  }
}

export default connect(null, mapDispatchToProps)(ReviewCard)