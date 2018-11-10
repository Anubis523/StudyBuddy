import { connect } from 'react-redux'
import { Radio, Button, Segment, Form, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'

const CardForm = props => {
    let answers = [...multipleChoice(props)]

    const { 
      handleRightAnswerChange, handleSubmit, 
      handleInputChange, handleTypeChange,
      toggleVisibility, answerCount 
    } = props
    
    const { flashCard } = props
    const { type, rightAnswer, question } = flashCard

    const multipleChoiceAnswers =  
      <>
        <label>Answers</label>
        <Form.Group widths='equal'>{answers[0]}{answers[1]}</Form.Group>
        <Form.Group widths='equal'>{answers[2]}{answers[3]}</Form.Group>
        <p>
          The right answer is {rightAnswer.length < 1 ? 'not yet selected.' : `Choice #: ${parseInt(rightAnswer)+1}.`}
        </p>

        <Form.Group>
          <Form.Field>
              <Radio label="Choice 1" name='rightAnswer' checked={rightAnswer === '0'} value={0} onChange={handleRightAnswerChange} />
            </Form.Field>
            <Form.Field>
              <Radio label="Choice 2" name='rightAnswer' checked={rightAnswer === '1'} value={1} onChange={handleRightAnswerChange} />
            </Form.Field>
            <Form.Field>
              <Radio label="Choice 3" name='rightAnswer' checked={rightAnswer === '2'} value={2} onChange={handleRightAnswerChange} />
            </Form.Field>
            <Form.Field>
              <Radio label="Choice 4" name='rightAnswer' checked={rightAnswer === '3'} value={3} onChange={handleRightAnswerChange} />
            </Form.Field>
        </Form.Group>
      </>

    return (
      <Segment inverted>
        <Form inverted onSubmit={handleSubmit}>
          <Form.Field>
            <Grid columns={3}>
              <Grid.Column>
                <Radio label="Multiple Choice" name='type' checked={type === 'Multiple Choice'} value={'Multiple Choice'} onChange={handleTypeChange} />
              </Grid.Column>
              <Grid.Column>
                <Radio label="True or False" name='type' checked={type === 'True or False'} value={'True or False'} onChange={handleTypeChange} />
              </Grid.Column>
              <Grid.Column>
                <Radio label="Fill in the Blank" name='type' checked={type === 'Fill in the Blank'} value={'Fill in the Blank'} onChange={handleTypeChange} />
              </Grid.Column>
            </Grid>
          </Form.Field>
          {!!type && <Form.Field>
            <Form.TextArea label='Question' name='question' value={question} onChange={handleInputChange} />
          </Form.Field>}
          {type === 'Multiple Choice'
            ? multipleChoiceAnswers
            : type === 'True or False'
                ? <div>True or False Option</div>
                : type === 'Fill in the Blank'
                  ? <di>Fill in the Blank Options</di>
                  : <div>No flashcard type chosen. Please select to continue.</div>}
          <Form.Group>
            <Button disabled={rightAnswer.length < 1 || question.length < 1 || answerCount < 2} color='blue' value='submit'>Submit Question</Button>
            <Button color='pink' onClick={toggleVisibility} >Cancel</Button>
          </Form.Group>
        </Form>
      </Segment>
    )
  
}

const multipleChoice = (props) =>{ 
  const answers = []
  for (let i = 0; i < 4; i ++)
  {
    answers.push(<Form.TextArea label={`Answer# ${i+1}`} key={`multi-${i}`} name={`multi-${i}`} placeholder={`answer-${i}`} onChange={props.handleInputChange}/>)
  }
  return answers
} 

export default connect(null)(CardForm)