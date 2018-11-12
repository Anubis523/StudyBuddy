const BaseURL = 'http://localhost:3001'
export const addCard = (deckId, cardBody) => {
  return (dispatch) => fetch(`${BaseURL}/decks/${deckId}/flashCards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({flashCard: cardBody})
  }).then(res => res.json())
  .then(newCard => dispatch({ type: 'ADD_CARD', payload: newCard }))
}

export const editCard = (cardId, cardBody) => {
  return (dispatch) =>  fetch(`${BaseURL}/flashCards/${cardId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({flashCard: cardBody})
  }).then(res => res.json())
  .then(editCard => dispatch({ type: 'EDIT_CARD', payload: editCard }))
}

export const deleteCard = cardId => {
  return (dispatch) => fetch(`${BaseURL}/flashCards/${cardId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => res.json()).then(leftCards => dispatch({ type: 'DELETE_CARD', payload: leftCards }))
}

export const correctCard = (cardId, right) => {
  return (dispatch) => fetch(`${BaseURL}/flashCards/${cardId}/checkAnswer`, {
    method: 'PATCH',
    headers:  {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },body: JSON.stringify({ right: right }) 
  }).then(res => res.json())
    .then(correctCard => dispatch({ type: 'CARD_CORRECTED', payload: correctCard }))
}

export const selectCardFromCards = (card) => {
  return (dispatch) => dispatch({type: 'SELECT_CARD', payload: card})
}
 