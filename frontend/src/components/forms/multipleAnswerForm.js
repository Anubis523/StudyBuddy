import { connect } from 'react-redux'
import { Radio, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import * as cardFormAction from '../../actions/cardFormActions'

const MultipleAnswerForm = props => {
  const answers = [...props.answers]
  const { rightAnswer } = props
    return(<>
        <label>Fill in two or more answers and select the correct one.</label><br/>
        <Form.Group>
          <Radio disabled={!answers[0]} value={0} width={5} label="Answer 1" name='answerOneCorrect' onChange={(evt) => {handleSelectAnswer(evt, props)}} checked={0 === rightAnswer && !!answers[0]}/>
          <Form.TextArea placeholder='Answer # 1' name='answerOne' width={11} value={answers[0]} onChange={(evt)=>{handleAnswers(evt, props)}} />
        </Form.Group><Form.Group>
          <Radio disabled={!answers[1]} value={1} width={5} label="Answer 2" name='answerTwoCorrect' onChange={(evt) => {handleSelectAnswer(evt, props)}} checked={1 === rightAnswer && !!answers[1]}/>
          <Form.TextArea placeholder='Answer # 2' name='answerTwo' width={11} value={answers[1]} onChange={(evt)=>{handleAnswers(evt, props)}}/>
          </Form.Group><Form.Group>
          <Radio disabled={!answers[2]} value={2} width={5} label="Answer 3" name='answerThreeCorrect' onChange={(evt) => {handleSelectAnswer(evt, props)}} checked={2 === rightAnswer && !!answers[2]}/>
          <Form.TextArea placeholder='Answer # 3' name='answerThree' width={11} value={answers[2]} onChange={(evt)=>{handleAnswers(evt, props)}}/>
          </Form.Group><Form.Group>
          <Radio disabled={!answers[3]} value={3} width={5} label="Answer 4" name='answerThreeCorrect' onChange={(evt) => {handleSelectAnswer(evt, props)}} checked={3 === rightAnswer && !!answers[3]}/>
          <Form.TextArea placeholder='Answer # 4' name='answerFour'  width={11} value={answers[3]} onChange={(evt)=>{handleAnswers(evt, props)}}/>
        </Form.Group>

    </>)
}

const handleAnswers = (evt, props) => {
  switch(evt.target.name){
    case 'answerOne':
      props.changeAnswerOne(evt.target.value)
      break

    case 'answerTwo':
      props.changeAnswerTwo(evt.target.value)
      break

    case 'answerThree':
      props.changeAnswerThree(evt.target.value)
      break

    case 'answerFour':
      props.changeAnswerFour(evt.target.value)
      break

    default:
      break
  }
}

const handleSelectAnswer = (evt, props) => {
  props.changeRightAnswer(parseInt(evt.target.parentElement.getElementsByTagName('input')[0].value))
}

const mapStateToProps = state => {
  return { 
    answers: state.cardForm.answers,
    rightAnswer: state.cardForm.rightAnswer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeAnswerOne: (ans) => dispatch(cardFormAction.changeAnswerOne(ans)),
    changeAnswerTwo: (ans) => dispatch(cardFormAction.changeAnswerTwo(ans)),
    changeAnswerThree: (ans) => dispatch(cardFormAction.changeAnswerThree(ans)),
    changeAnswerFour: (ans) => dispatch(cardFormAction.changeAnswerFour(ans)),
    changeRightAnswer: (rightAnswer) => dispatch(cardFormAction.changeRightAnswer(rightAnswer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MultipleAnswerForm)