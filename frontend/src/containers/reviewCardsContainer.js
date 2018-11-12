import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
// eslint-disable-next-line
import DeckReviewItem from '../components/deckReviewItem'
// eslint-disable-next-line
import ReviewCard from '../components/reviewCard'

class ReviewCardsContainer extends React.Component {
  state = {
    cardNumber: 0
  }

  handleChange = evt => {
    let { cardNumber } = this.state
    const { currentCards } = this.props
    switch(evt.target.name) {
      case'next':
        cardNumber < currentCards.length - 1 ? ++cardNumber : cardNumber = currentCards.length - 1
        break

      case'previous':
        cardNumber < 1 ? cardNumber = 0: --cardNumber
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
      return <ReviewCard card={cards[cardNumber]}/>
    } else {
      return null
    }
  }

  render() {
    // const reviewCards = this.props.currentCards.map(card => <ReviewCard width={12} key={`ReviewCard-${card.id}`} card={card}/>)
    return(<>
      <Segment>
      <Button onClick={this.handleChange} name='previous' color='teal' type='button'>Previous</Button>
        <Button onClick={this.handleChange} name='next' color='teal' type='button'>Next</Button>
        {this.currentReview()}
      </Segment> 
    </>)
  }
}
const mapStateToProps = state => {
  return {
    currentCards: state.base.currentCards
  }
}

export default connect(mapStateToProps)(ReviewCardsContainer)