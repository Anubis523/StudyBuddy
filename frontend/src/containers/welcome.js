import React from 'react'
import { connect } from 'react-redux'
import { logOff, setUser } from '../actions/items'
import { Container, Menu, MenuItem, Button, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './dashboard'

const Welcome = (props) => {
  return (
    <Container>
      <Menu fixed='top' inverted>
        <Menu.Item inverted>
          <h1>Welcome {props.currentUser.username}!!</h1>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button onClick={(evt)=>{resetEverything(evt, props)}}>LogOff</Button>
        </Menu.Item>
      </Menu>
      <br/>
      <Segment>
        <Dashboard/>
      </Segment>
    </Container>
  )
}

const resetEverything = (evt, props) => {
  evt.preventDefault()
  const { logOff } = props
  localStorage.clear()
  logOff()
}

const mapStateToProps = (state) => {
  return {currentUser: state.base.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
    logOff: () => dispatch(logOff()),
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)