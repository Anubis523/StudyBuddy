import React from 'react'
import { connect } from 'react-redux'
import { Container, Menu, Segment } from 'semantic-ui-react'
import Card from '../components/card'

const CardContainer = (props) => {
  return (
    <div>
      CardContainer Pending
      {flashCards(props.cardPool)}
    </div>
  )
}

const mapStateToProps = state =>  {
  return { cardPool: state.currentCards}
}

const flashCards = (cardPool) => {return cardPool.map(card => <Card key={`Card-${card.id}`} card={card}/>)}

export default connect(mapStateToProps)(CardContainer)