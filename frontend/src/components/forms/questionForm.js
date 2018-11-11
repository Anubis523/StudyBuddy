import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'

import { changeQuestion } from '../../actions/cardFormActions'

class QuestionForm extends React.Component {

  handleChange = (evt) => {
    evt.preventDefault()
    this.props.changeQuestion(evt.target.value)
  }

  render(){
  const { question } = this.props
  return(
    <>
      <Form.Input label='Question:' type='text' value={question} onChange={this.handleChange}/>
    </>)
  }
}

const mapStateToProps = state =>  {
  return { question: state.cardForm.question }
}

const mapDispatchToProps = dispatch => {
  return { changeQuestion: (question) => dispatch(changeQuestion(question)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm)
