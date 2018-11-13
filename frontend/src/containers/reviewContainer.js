import React from 'react'
// eslint-disable-next-line
import { Container, Menu, Segment, Radio, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import DeckReviewItem from '../components/deckReviewItem'
import ReviewCardsContainer from '../containers/reviewCardsContainer'
import { getDecks, getDecksCards, changeInReview } from '../actions/items'

class ReviewContainer extends React.Component {
  state = {
    reviewMode : ''
  }

  handleClick = evt => {
    let reviewMode = evt.target.name
    console.log(evt)
    switch(evt.target.name) {
      case 'Deck Review':
      // Deck Review logic
      this.props.getDecks(this.props.currentUser.id)
        break

      case 'Review By Subject/Tag':
        // Review By Subject/ Tag stretch goal functionality
        break

      case 'Cancel':
        this.props.changeInReview(false)
        break

      default:
        break
    }
    this.setState({ reviewMode })
  }

  render() {
    const { reviewMode } = this.state
    const { inReview } = this.props
    const deckReviewItems = this.props.currentDecks.map(deck => <DeckReviewItem key={`DeckReview-${deck.id}`} deck={deck}/>)
    return(<>
      Review Container Content Pending
      <Segment inverted>
          { !inReview && <Button color='teal' name='Deck Review' type='button' onClick={this.handleClick}>Review By Deck</Button>}
          { !inReview && <Button color='teal' name='Review By Subject/Tag' type='button' disabled>Review By Subject/ Tag</Button>}
          { inReview && <Button color='pink' name='Cancel' type='button' onClick={this.handleClick}>Cancel</Button>}
      </Segment>
      { !inReview && reviewMode === 'Deck Review' && deckReviewItems }
      { !inReview && reviewMode === 'Review By Subject/Tag' && <>Review by subject/tag goes here</>}
      { inReview && <ReviewCardsContainer/>}
    </>)
  }
}

const mapStateToProps = state => {
  return { 
    currentDecks: state.base.currentDecks,
    currentUser: state.base.currentUser,
    selectedDeck: state.base.selectedDeck,
    inReview: state.base.inReview
  }
}

const mapDispatchToProps = dispatch =>  {
  return {
    getDecks: (userId) => dispatch(getDecks(userId)), 
    getDecksCards: (deckId) => dispatch(getDecksCards(deckId)),
    changeInReview: (bool) => dispatch(changeInReview(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer)