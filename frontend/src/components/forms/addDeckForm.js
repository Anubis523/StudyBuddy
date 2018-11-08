import { connect } from 'react-redux'
import { Container, Button, Segment, Divider, Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import { addDeck } from '../../actions/items'

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
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Deck Name:</label>
          <input name='name' onChange={this.handleInputChange} type='text'placeholder='Super Awesome Deck'/>
        </Form.Field>
        <Form.Field>
          <label>Deck Description:</label>
          <input name='description' onChange={this.handleInputChange} type='text'placeholder='description...'/>
        </Form.Field>
        <Button value='submit'>Add</Button>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {addDeck: (id, deckBody) => dispatch(addDeck(id, deckBody))}
}



export default connect(mapStateToProps, mapDispatchToProps)(AddDeckForm)