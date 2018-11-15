const initialState = {
  name: '',
  description: ''
}

const deckFormReducer = (state = initialState, {action, payload}) => {
  switch(action){

    case 'CHANGE_NAME':
      return {...state, name: payload}

    case 'CHANGE_DESCRIPTION':
      return {...state, description: payload}

    default:
      return initialState
  }
}

export default deckFormReducer