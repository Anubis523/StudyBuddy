const BaseURL = 'http://localhost:3001' // *NOTE: to be changed when deployed, to env Variable

export const addCard = (deckId, cardBody) => {
  return (dispatch) => fetch(`${BaseURL}/decks/${deckId}/flashCards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(cardBody)
  }).then(res => res.json())
  .then(newCard => dispatch({type: 'ADD_CARD', payload: newCard}))
}

export const selectCard = (cardId) => {
  return (dispatch) => fetch(`${BaseURL}/flashCards/${cardId}`)
  .then(res => res.json())
  .then(selectedCard => dispatch({type: 'SELECT_CARD', payload: selectedCard}))
}
// comment to push
// export const changeCardForm = (cardId) => {
//   return (dispatch) => fetch(`${BaseURL}/flashCards/${cardId}`)
//   .then(res => res.json())
//   .then(selectedCard => dispatch({type: 'SELECTED_CARD_FORM', payload: selectedCard}))
// }

export const changeCardForm = (card) => {
  return (dispatch) => dispatch({type: 'SELECTED_CARD_FORM', payload: card})
}

export const changeAnswerOne = (answer) => {
  return (dispatch) => dispatch({type: 'CHANGE_ANSWER_ONE', payload: answer})
}
export const changeAnswerTwo = (answer) => {
  return (dispatch) => dispatch({type: 'CHANGE_ANSWER_TWO', payload: answer})
}

export const changeAnswerThree = (answer) => {
  return (dispatch) => dispatch({type: 'CHANGE_ANSWER_THREE', payload: answer})
}

export const changeAnswerFour = (answer) => {
  return (dispatch) => dispatch({type: 'CHANGE_ANSWER_FOUR', payload: answer})
}

export const changeType = (type) => {
  return (dispatch) => dispatch({type: 'CHANGE_TYPE', payload: type})
}

export const changeRightAnswer = (rightAnswer) => {
  return (dispatch) => dispatch({type: 'CHANGE_RIGHT_ANSWER', payload: rightAnswer})
}

export const changeQuestion = (question) => {
  return (dispatch) => dispatch({type: 'CHANGE_QUESTION', payload: question})
}

export const resetForm = () => {
  return (dispatch) => dispatch({type: 'RESET_FORM', payload: null})
}