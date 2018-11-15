import { connect } from 'react-redux'
// eslint-disable-next-line
import { Container, Button, Segment, Divider, Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import * as _items from '../../actions/items'

class AddDeckForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : props.name || '',
      description: props.description || ''
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
    const { deckFormMode, selectedDeck } = this.props
    // debugger
    if (deckFormMode === 'ADD'){
      this.props.addDeck( id, {deck: {name, description}})
    } else if (deckFormMode === 'EDIT') {
      this.props.editDeck(selectedDeck.id, {deck: {name: evt.target.name.value, description: evt.target.description.value}})
    }

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
    const { name, description } = this.state
    return(
      <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Deck Name:</label>
            <input name='name' value={name} onChange={this.handleInputChange} maxLength={400} type='text'placeholder='Super Awesome Deck'/>
          </Form.Field>
          <Form.Field>
            <label>Deck Description:</label>
            <input name='description' maxLength={400} value={description} onChange={this.handleInputChange} type='text'placeholder='description...'/>
          </Form.Field>
          <Button disabled={name.length < 1} color='blue' value='submit'>Submit</Button>
          <Button color='pink' onClick={this.handleCancel}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.base.currentUser,
    deckFormMode: state.base.deckFormMode,
    selectedDeck: state.base.selectedDeck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDeck: (id, deckBody) => dispatch(_items.addDeck(id, deckBody)),
    getDecks: (id) => dispatch(_items.getDecks(id)),
    editDeck: (id, deck) => dispatch(_items.editDeck(id, deck))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddDeckForm)