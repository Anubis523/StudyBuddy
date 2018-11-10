import { connect } from 'react-redux'
import { Radio, Button, Segment, Form, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'

class MultipleChoiceForm extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
      rightAnswer: '',
      answers: ['', '', '', ''],
      question: ''
      // replace with a validation method, would probably work better
      // valid: !!this.props.selectedCard.id || false
    }
    this.updater()
  }

  updater = () => {
    const { selectedCard } = this.props
    if(!!selectedCard.id) {
      const { question, rightAnswer } = selectedCard
      const answers = [...selectedCard.answers]
      this.setState({ question, rightAnswer, answers }, () => {
        console.log('the thing it worked')
      })
    }
    console.log('working')
  }

  render() {
    return(<div>MultipleChoice Form</div>)
  }
}
const mapStateToProps = state => {
  // return pertinent redux state
  return { selectedCard: state.base.selectedCard}
}

export default connect(mapStateToProps)(MultipleChoiceForm)