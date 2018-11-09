import { connect } from 'react-redux'
import { Container, Button, Segment, Divider, Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import { addDeck, getDecks } from '../../actions/items'

class AddDeckForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      description:''
    }
  }

  handleInputChange = (evt) => {
    evt.preventDefault()
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let id = this.props.currentUser.id
    const { name, description } = this.state
    this.props.addDeck( id, {deck: {name, description}})
    this.props.getDecks(id)
    for (let el of evt.target.parentElement.getElementsByTagName('input')){
      el.value = ''
    }
    this.props.toggleVisibility()
  }

  handleCancel = () => {
    this.props.toggleVisibility()
  }


  render(){
    const { name } = this.state
    return(
      <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Deck Name:</label>
            <input name='name' onChange={this.handleInputChange} type='text'placeholder='Super Awesome Deck'/>
          </Form.Field>
          <Form.Field>
            <label>Deck Description:</label>
            <input name='description' onChange={this.handleInputChange} type='text'placeholder='description...'/>
          </Form.Field>
          <Button disabled={name.length < 1} color='blue' value='submit'>Submit</Button>
          <Button color='pink' onClick={this.handleCancel}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}
const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
    addDeck: (id, deckBody) => dispatch(addDeck(id, deckBody)),
    getDecks: (id) => dispatch(getDecks(id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddDeckForm)