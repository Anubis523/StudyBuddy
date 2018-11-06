import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { newUser } from '../actions/items'

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password:"",
  }

  handleChange = (evt) => {
    evt.preventDefault()
    this.setState({ [evt.target.name]: evt.target.value })
  }
  
  onSubmit = (evt) => {
    evt.preventDefault()
    const { username, email, password } = this.state
    this.props.newUser({user: {username, email, password}})
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Username</label>
          <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
        <input type="text" placeholder="email" name="email" onChange={this.handleChange}/></Form.Field>
        <Form.Field>
          <label>Password</label>
        <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
        </Form.Field>
        <button value="submit">Sign Up</button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { newUser: (userObj) => dispatch(newUser(userObj))}
}

export default connect(null, mapDispatchToProps)(Signup)