import cardForm from "../components/forms/cardForm";

const initialState = {
  question: '',
  answers: [],
  rightAnswer: null,
  id: null,
  type: ''
}

const cardFormReducer = ( state = initialState, { type, payload}) => {
  switch (type) {
    case 'SELECTED_CARD_FORM':
      return payload

    case 'CHANGE_ANSWERS':
      const answers = [...state.answers, payload]
      return {...state, answers }

    case 'CHANGE_QUESTION':
      return {...state, question: payload}

    case 'CHANGE_RIGHT_ANSWER':
      return {...state, rightAnswe: payload}

    case 'CHANGE_TYPE':
      return {...state, type: payload}
    
    default:
      return state
  }
}
export default cardFormReducer