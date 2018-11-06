import React from 'react'
import Login from './login'
import Signup from './signup'
import { Container, Menu, Segment } from 'semantic-ui-react'

export default class Signin extends React.Component {
  constructor(){
    super()
    this.state = {
      activeItem: 'login'
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu attached="top" tabular>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}/>
        </Menu>

        <Segment attached='bottom'>
          <Container>
            {activeItem === 'login' && <Login/>}
            {activeItem === 'signup' && <Signup/>}
          </Container>
        </Segment>
      </Container>
    )
  }
}
