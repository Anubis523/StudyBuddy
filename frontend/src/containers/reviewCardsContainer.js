import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import ReviewCard from '../components/reviewCard'
import * as _actionItems from '../actions/items'
import * as _cardAction from '../actions/cardActions'
import * as _reviewActions from '../actions/reviewCardActions'

class ReviewCardsContainer extends React.Component {
  state = {
    cardNumber: 0,
    revealedAnswer: false
  }

  handleAnswerReveal = () => {
    this.setState({ revealedAnswer: !this.state.revealedAnswer })
  }

  handleTest = () => {
    let { cardNumber } = this.state
    const { currentCards, setReviewCard, changeInReview } = this.props
    if (cardNumber < currentCards.length - 1 ) {
      this.setState({ cardNumber: ++cardNumber }) 
    } else {
      changeInReview(false)
      setReviewCard(null)
    } 
  }

  handleChange = evt => {
    const { selectedCard } = this.props
    switch(evt.target.name) {
      case 'right':
        this.props.correctCard(selectedCard.id, true)
        this.handleTest()
        break  

      case 'wrong':
        this.props.correctCard(selectedCard.id, false)
        this.handleTest()
        break   

      default:
        break
    }
    this.setState({ revealedAnswer: false})
  }

  currentReview = () => {
    const { cardNumber } = this.state
    if (this.props.currentCards[cardNumber]){
      let cards = [...this.props.currentCards]
      let reviewCard = cards[cardNumber]
      this.props.selectCardManually(reviewCard)
      this.props.setReviewCard(reviewCard)
    }
  }

  getRightAnswer = () => {
    const { selectedCard } = this.props
    const { rightAnswer, answers } = selectedCard
    return answers[rightAnswer]
  }

  render() {
    this.currentReview()
    const { revealedAnswer } = this.state
    const { selectedCard } = this.props
    const { timesAttempted, timesCorrect } = selectedCard
    return(<>
      <Segment>
        <Segment inverted>
          <h3>This question has been answered correctly <span>{timesCorrect}</span> out of <span>{timesAttempted}</span> times.</h3>
        </Segment>
        <ReviewCard revealAnswer={this.handleAnswerReveal}/>
        
        { revealedAnswer &&
        <Segment inverted>
        <p>The Answer was: <span>{this.getRightAnswer()} .Were you right or wrong?</span></p>
            <Button.Group>
              <Button onClick={this.handleChange} name='right' color='green' type='button'>Right?</Button>
              <Button onClick={this.handleChange} name='wrong' color='red' type='button'>Wrong?</Button>
            </Button.Group>
          </Segment>}
      </Segment> 
    </>)
  }
}
const mapStateToProps = state => {
  return {
    currentCards: state.base.currentCards,
    selectedCard: state.base.selectedCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCardManually: (card) => dispatch(_cardAction.selectCardManually(card)),
    correctCard: (cardId, right) => dispatch(_cardAction.correctCard(cardId, right)),
    setReviewCard: (card) => dispatch(_reviewActions.setReviewCard(card)),
    changeInReview: (bool) => dispatch(_actionItems.changeInReview(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCardsContainer)