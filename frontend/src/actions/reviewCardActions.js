export const wasCorrect = () =>{
  return (dispatch) => dispatch({ type: 'CORRECT_CHANGE', payload: null })
}

export const wasIncorrect = () =>{
  return (dispatch) => dispatch({ type: 'INCORRECT_CHANGE', payload: null })
}

export const setReviewCard = (card) => {
  return (dispatch) => dispatch({ type: 'SET_REVIEW_CARD', payload: card})
}

export const hintUsed = () => {
  return (dispatch) => dispatch({ type: 'HINT_USED', payload: null })
}