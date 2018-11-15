import React from 'react'
import { connect } from 'react-redux'
import { logOff, setUser, changeToken } from '../actions/items'
import { resetForm } from '../actions/cardFormActions'
import { Container, Menu, MenuItem, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './dashboard'

const Welcome = (props) => {
  return (
    <>
      <Menu>
        <Menu.Header>
          <MenuItem>
            <h1>Welcome {props.currentUser.username}!!</h1>
          </MenuItem>
        </Menu.Header>
      </Menu>
      <Container>
        <Dashboard/>
        <Button onClick={(evt)=>{resetEverything(evt, props)}}>LogOff</Button>
      </Container>
    </>
  )
}

const resetEverything = (evt, props) => {
  evt.preventDefault()
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  // localStorage.clear()
  props.changeToken('')
  props.logOff()
  props.resetForm()
  
}

const mapStateToProps = (state) => {
  return {currentUser: state.base.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
    logOff: () => dispatch(logOff()),
    resetForm: () => dispatch(resetForm()),
    setUser: (user) => dispatch(setUser(user)),
    changeToken: (token) => dispatch(changeToken(token))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)