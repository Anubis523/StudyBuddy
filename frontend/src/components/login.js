import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../actions/items'
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
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" name="username" onChange={this.handleChange}/>
        <input type="password" name="password" onChange={this.handleChange}/>
        <button value="submit">Submit</button>
      </form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {changeUser: (id) => dispatch(changeUser(id))}
}
export default connect(null, mapDispatchToProps)(Login)