import React from 'react'
import { connect } from 'react-redux'
import { logOff } from '../actions/items'
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
        <Button onClick={()=>{resetEverything(props)}}>LogOff</Button>
      </Container>
    </>
  
  )
}

const resetEverything = props => {
  props.logOff()
  props.resetForm()
}

const mapStateToProps = (state) => {
  return {currentUser: state.base.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
    logOff: () => dispatch(logOff()),
    resetForm: () => dispatch(resetForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)