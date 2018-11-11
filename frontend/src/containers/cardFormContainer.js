import { connect } from 'react-redux'
import { Radio, Button, Segment, Form, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { changeType, resetForm, changeAnswerOne, changeAnswerTwo, changeRightAnswer } from '../actions/cardFormActions'

import QuestionForm from '../components/forms/questionForm'
import BlankAnswersForm from '../components/forms/blankAnswersForm'
import MultipleAnswerForm from '../components/forms/multipleAnswerForm'
import TrueOrFalseAnswersForm from '../components/forms/trueOrFalseAnswersForm'

class CardFormContainer extends React.Component {

  handleSubmit = (evt) => {
    evt.preventDefault()
    // need logic that based on what kind of event either adds a card or updates an existing one, then it should clear the form
    console.log('submit handled')
  }

  handleTypeChange = (evt) => {
    evt.preventDefault()
    if (this.props.type === 'Fill in the Blank'){
      this.props.changeRightAnswer(0)
    }
    // needs logic that resets the form on each change
    if (this.props.type !== evt.target.innerText){
      this.props.resetForm()
      this.props.changeType(evt.target.innerText)
      switch (this.props.type) {

        case 'True or False':
          this.props.changeAnswerOne('True')
          this.props.changeAnswerTwo('False')
          break;
      
        default:
          break;
      }
    }
    
  }

  handleCancel = () => {
    this.props.resetForm()
    this.props.hideForm()
  }

  submissionIsDisabled = () => {
    let isDisabled = true
    const answers = [...this.props.selectedCard.answers]
    const { question, rightAnswer, type } = this.props.selectedCard
    let answerCount = answers.filter(el => el.length > 0).length

    if (!!question && rightAnswer !== -1 && !!type) {
      
      switch (type) {
        case 'Fill in the Blank':
          isDisabled = !!answers[0] ? false: true
          break

        case 'Multiple Choice':
          isDisabled = answerCount > 1 ? false : true
          break
          
        case 'True or False':
          isDisabled = false
          break

        default:
          break
      }
    }

    
    return isDisabled
  }

  render() {
    const { type }  = this.props.selectedCard
    return (
    <Segment inverted>
         <Form inverted onSubmit={this.handleSubmit}>
           <Form.Field>
             <Grid columns={3}>
               <Grid.Column>
                 <Radio label="Multiple Choice" name='type' checked={type === 'Multiple Choice'} value={'Multiple Choice'} onChange={this.handleTypeChange} />
               </Grid.Column>
               <Grid.Column>
                 <Radio label="True or False" name='type' checked={type === 'True or False'} value={'True or False'} onChange={this.handleTypeChange} />
               </Grid.Column>
               <Grid.Column>
                 <Radio label="Fill in the Blank" name='type' checked={type === 'Fill in the Blank'} value={'Fill in the Blank'} onChange={this.handleTypeChange} />
               </Grid.Column>
             </Grid>
           </Form.Field>
            <QuestionForm/>
            { type === 'Fill in the Blank' && <BlankAnswersForm/> }
            { type === 'Multiple Choice' && <MultipleAnswerForm/> }
            { type === 'True or False' && <TrueOrFalseAnswersForm/> }
           <Form.Group>
             <Button disabled={this.submissionIsDisabled()} color='blue' value='submit'>Submit Question</Button>
             <Button color='pink' onClick={this.handleCancel} >Cancel</Button>
           </Form.Group>
          </Form>
           </Segment>
    )
  }
}



const mapStateToProps = state => {
  return { selectedCard: state.cardForm}
}

const mapDispatchToProps = dispatch => {
  return { 
    changeType: (type) => dispatch(changeType(type)),
    resetForm: () => dispatch(resetForm()),
    changeAnswerOne: (answer) => dispatch(changeAnswerOne(answer)),
    changeAnswerTwo: (answer) => dispatch(changeAnswerTwo(answer)),
    changeRightAnswer: (rightAnswer) => dispatch(changeRightAnswer(parseInt(rightAnswer))) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardFormContainer)