import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../actions/items'
import { Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
class Login extends Component{

  state = {
    username: '',
    password: ''
  }

  handleChange = (evt) => {
    evt.preventDefault()
    this.setState({ [evt.target.name]: evt.target.value })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    this.props.changeUser(1)
    this.setState({username: '', password: ''})
  }

  render() {
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Username</label>
          <input placeholder="username" type="text" name="username" onChange={this.handleChange} value={this.state.username}/></Form.Field>
        <Form.Field>
        <label>Password</label>
          <input placeholder="password" type="password" name="password" onChange={this.handleChange} value={this.state.password}/></Form.Field>
        
        <button value="submit">Submit</button>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {changeUser: (id) => dispatch(changeUser(id))}
}
export default connect(null, mapDispatchToProps)(Login)