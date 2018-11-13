import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import ReviewCard from '../components/reviewCard'
// import * as _cardForm from '../actions/cardFormActions'
import * as _cardAction from '../actions/cardActions'

class ReviewCardsContainer extends React.Component {
  state = {
    cardNumber: 0,
    revealedAnswer: false
  }

  handleChange = evt => {
    let { cardNumber } = this.state
    const { currentCards, selectedCard } = this.props
    switch(evt.target.name) {
      case 'next':
        this.setState({ revealedAnswer: false})
        cardNumber < currentCards.length - 1 ? ++cardNumber : cardNumber = currentCards.length - 1
        break

      case 'previous':
        this.setState({ revealedAnswer: false})
        cardNumber < 1 ? cardNumber = 0: --cardNumber
        break 
      
      case 'revealAnswer':
        this.setState({ revealedAnswer: !this.state.revealedAnswer})
        break

      case 'right':
        
        this.props.correctCard(selectedCard.id, true)
        break  

      case 'wrong':
        this.props.correctCard(selectedCard.id, false)
        break   

      default:
        break
    }
    this.setState({ cardNumber })
  }

  currentReview = () => {
    const { cardNumber } = this.state
    if (this.props.currentCards[cardNumber]){
      let cards = [...this.props.currentCards]
      this.props.selectCard(cards[cardNumber])
      return <ReviewCard card={cards[cardNumber]}/>
    } else {
      return null
    }
  }

  getRightAnswer = () => {
    const { selectedCard } = this.props
    const { rightAnswer, answers } = selectedCard
    return answers[rightAnswer]
  }

  render() {
    const { revealedAnswer } = this.state

    return(<>
      <Segment>
        <Segment inverted>
          <Button onClick={this.handleChange} name='previous' color='teal' type='button'>Previous</Button>
          <Button onClick={this.handleChange} name='next' color='teal' type='button'>Next</Button>
        </Segment>
        {this.currentReview()}
        <Button onClick={this.handleChange} name='revealAnswer' color='violet' type='button'>Answer?</Button>
        { revealedAnswer &&
        <Segment inverted>
        <p>The Answer was: <span>{this.getRightAnswer()} .Were you right or wrong?</span></p>
            <Button.Group>
              <Button onClick={this.handleChange} name='right' color='green' type='button'>Right?</Button>
              <Button onClick={this.handleChange} name='wrong' color='red' type='button'>Wrong?</Button>
            </Button.Group>
          </Segment>
         }
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
    selectCard: (card) => dispatch(_cardAction.selectCardManually(card)),
    correctCard: (cardId, right) => dispatch(_cardAction.correctCard(cardId, right))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCardsContainer)