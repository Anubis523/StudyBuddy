const initialState = {
  question: '',
  type: '',
  answers: ['', '', '', ''],
  rightAnswer: -1
}

const cardFormReducer = ( state = initialState, { type, payload}) => {
  switch (type) {
    case 'SELECTED_CARD_FORM':
      return payload

    case 'CHANGE_ANSWER_ONE':
      let answers = [...state.answers]
      answers[0] = payload
      return {...state, answers }
    
    case 'CHANGE_ANSWER_TWO':
      answers = [...state.answers]
      answers[1] = payload
      return {...state, answers }
    
    case 'CHANGE_ANSWER_THREE':
      answers = [...state.answers]
      answers[2] = payload
      return {...state, answers }
  
    case 'CHANGE_ANSWER_FOUR':
      answers = [...state.answers]
      answers[3] = payload
      return {...state, answers }


    case 'CHANGE_QUESTION':
      return {...state, question: payload}

    case 'CHANGE_RIGHT_ANSWER':
      return {...state, rightAnswer: payload}

    case 'CHANGE_TYPE':
      return {...state, type: payload}

    case 'RESET_FORM':
      return initialState

    default:
      return state
  }
}
export default cardFormReducer