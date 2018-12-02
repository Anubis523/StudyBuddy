const initialState = {
  question: '',
  type: '',
  answers: ['', '', '', ''],
  rightAnswer: -1,
  timesAttempted: 0,
  timesCorrect: 0
}

const reviewCardReducer = (state = initialState, {
  type, payload
}) => {
  switch(type){

    case 'SET_REVIEW_CARD':
      return payload

    case 'CORRECT_CHANGE':
      let { timesAttempted, timesCorrect} = state
      return {...state, timesAttempted: ++timesAttempted, timesCorrect: ++timesCorrect}

    case 'INCORRECT_CHANGE':
      timesCorrect = state.timesCorrect
      timesAttempted = state.timesAttempted
      return {...state, timesAttempted: ++timesAttempted, timesCorrect }

    case 'HINT_USED':
      timesCorrect = state.timesCorrect
      timesAttempted = state.timesAttempted
      return {...state, timesAttempted: ++timesAttempted, timesCorrect: ++timesCorrect }

    case 'RESET_REVIEW_CARD':
      return initialState

    default:
      return state
  }
}

export default reviewCardReducer