import { connect } from 'react-redux'
import { Radio, Button, Segment, Form, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'

class CardFormContainer extends React.Component {
  // constructor(props){
  //   super(props)
  //   const { type } = this.props.selectedCard
  //   this.state = {
  //     type
  //   }
  // }

  state = {
    type: this.props.selectedCard.type
  }

  
  handleSubmit = (evt) => {
    debugger
    console.log('submit handled')
  }

  handleTypeChange = (evt) => {

  }

  render() {
    const { type }  = this.state
    return (
    <Segment inverted>
         <Form inverted onSubmit={this.handleSubmit}>
           <Form.Field>
             <Grid columns={3}>
               <Grid.Column>
                 <Radio label="Multiple Choice" name='type' checked={type === 'Multiple Choice'} value={'Multiple Choice'} onChange={this.handleTypeChange} />
               </Grid.Column>
               <Grid.Column>
                 <Radio label="True or False" name='type' checked={type === 'True or False'} value={'True or False'} onChange={this.handleTypeChange} />
               </Grid.Column>
               <Grid.Column>
                 <Radio label="Fill in the Blank" name='type' checked={type === 'Fill in the Blank'} value={'Fill in the Blank'} onChange={this.handleTypeChange} />
               </Grid.Column>
             </Grid>
           </Form.Field>
           
           <>FormSwitch Goes Here</>

           <Form.Group>
             <Button disabled={false} color='blue' value='submit'>Submit Question</Button>
             <Button color='pink' onClick={() => {console.log('clicked')}} >Cancel</Button>
           </Form.Group>
          </Form>
           </Segment>
    )
  }
}

const mapStateToProps = state => {
  return { selectedCard: state.cardForm}
}

export default connect(mapStateToProps)(CardFormContainer)