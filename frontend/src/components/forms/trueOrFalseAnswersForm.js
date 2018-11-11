import React from 'react'
import { connect } from 'react-redux'
import { Divider, Button } from 'semantic-ui-react'
import { changeAnswerOne, changeAnswerTwo, changeRightAnswer } from '../../actions/cardFormActions'

const TrueOrFalseAnswersForm = props => {
  const { rightAnswer } = props
  return(<>
  <Divider hidden={true}/>
    <label>{rightAnswer === -1
      ? 'Please choose True or False.' 
      : `${rightAnswer === 0 ? 'True' : 'False'} chosen as the correct answer.`
    }</label><br/>
    <Button.Group>
      <Button type='button' color='green' name='true' onClick={(evt) => {handleTrueFalse(evt, props)}} >True</Button>
      <Button type='button' color='red' name='false' onClick={(evt) => {handleTrueFalse(evt, props)}}>False</Button>
    </Button.Group>
    <Divider hidden={true}/>
  </>)
}

const handleTrueFalse = (evt, props) => {
  let rightAnswer = evt.target.name === 'true' ? 0 : 1
  props.changeRightAnswer(rightAnswer)
  props.changeAnswerOne('true')
  props.changeAnswerTwo('false')
}

const mapStateToProps = state => {
  return {
    rightAnswer: state.cardForm.rightAnswer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeRightAnswer: (rightAnswer) => dispatch(changeRightAnswer(rightAnswer)),
    changeAnswerOne: (answerOne) => dispatch(changeAnswerOne(answerOne)),
    changeAnswerTwo: (answerTwo) => dispatch(changeAnswerTwo(answerTwo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrueOrFalseAnswersForm)