import { connect } from 'react-redux'
import { Container, Button, Segment, Divider, Dropdown, Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'

class AddCardForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      multipleChoice: [],
      type: ''
    }
  }

  

  handleInputChange = (evt) => {
    evt.preventDefault()
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSelectChange = (evt) => {
    evt.preventDefault()
    this.setState({type: evt.target.parentElement.textContent})
  }

  render() {
    return (
      <Segment >
        <Form>
          <Form.Field>
            <Dropdown onChange={this.handleSelectChange} options={types}/>
          </Form.Field>
          <Form.Field>
            <label>Question</label>
            <input name='question' type='text'/>
          </Form.Field>
        </Form>
      </Segment>
    )
  }
}

const types = [
  {key:'multipleChoice', value:'multipleChoice', text:'Multiple Choice'}, 
  {key:'trueOrFalse', value:'trueOrFalse', text:'True or False'}, 
  {key:'fillInTheBlank', value:'fillInTheBlank', text:'Fill In The Blank'}]

// const mapDispatchToProps = dispatch => {

// }

export default connect(null)(AddCardForm)