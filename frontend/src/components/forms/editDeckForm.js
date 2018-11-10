import { connect } from 'react-redux'
import { Container, Button, Segment, Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'

class EditDeckForm extends Component {
  state = {
    name: this.props.selectedDeck.name,
    description: this.props.selectedDeck.description
  }

  handleChange = (evt) => {
    evt.preventDefault()
    this.setState()
  }

  render() {
    return(<></>)
  }
}

const mapStateToProps = state => {
  return {selectedDeck: state.selectedDeck}
}

const mapDispatchToProps = dispatch => {
  return {/*object with key  */}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeckForm)
