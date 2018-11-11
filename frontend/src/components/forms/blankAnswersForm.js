import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { changeAnswerOne, changeRightAnswer } from '../../actions/cardFormActions'


const BlankAnswersForm = props => {
  const answers = [...props.answers]
    return(
            <Form.Field>
              <Form.TextArea value={answers[0]} label='Answer' name='answer' onChange={(evt) => {handleAnswerChange(evt, props)}}/>
            </Form.Field>
    )
}

const handleAnswerChange = (evt, props) => {
  props.changeAnswerOne(evt.target.value)
  props.changeRightAnswer()
}

const mapStateToProps = state => {
  return {
    answers: state.cardForm.answers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeAnswerOne: (answer) => dispatch(changeAnswerOne(answer)),
    changeRightAnswer: ()=> dispatch(changeRightAnswer(0))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlankAnswersForm)