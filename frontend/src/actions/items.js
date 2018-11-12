const BaseURL = 'http://localhost:3001'
export const changeUser = (id) => {
  return (dispatch) =>  fetch(`${BaseURL}/users/${id}`)
    .then(user => user.json())
    .then(json =>  dispatch({ type: 'CHANGE_USER', payload: json}))
}

export const newUser = (userObj) => {
  return (dispatch) => fetch(`${BaseURL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userObj)
  }).then(res => res.json())
  .then(user => dispatch({type: 'NEW_USER', payload:user}))
}

export const logOff = () => {
  return (dispatch) => dispatch({type: 'LOG_OFF', payload: null})
}

export const editDeck = (editDeck) =>{
  return {
    type: 'EDIT_DECK',
    payload: editDeck
  }
}

export const selectDeck = (selectDeck) => {
  return (dispatch) => dispatch({type: 'SELECT_DECK', payload: selectDeck})
}

export const getDecksCards = (deckId) => {
  return (dispatch) => fetch(`${BaseURL}/decks/${deckId}/flashCards`)
  .then(res => res.json())
  .then(cards => dispatch({type: 'GET_DECK_CARDS', payload: cards}))
}
//*NOTE: not implemented yet ...
export const browseDeck = (browseDeck) =>{
  return {
    type: 'BROWSE_DECK',
    payload: browseDeck
  }
}

export const getDecks = (id) => {
  return (dispatch) => fetch(`${BaseURL}/users/${id}/decks`)
    .then(res => res.json())
    .then(decks => {dispatch({ type: 'GET_DECKS', payload: decks})})
}

export const addDeck = (userId, deckBody) => {
  return (dispatch) => fetch(`${BaseURL}/users/${userId}/decks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(deckBody)
  }).then(res => res.json())
  .then(newDeck => {dispatch({type: 'ADD_DECK', payload: newDeck})})
}

export const removeDeck = (deckId) => {
  return (dispatch) => fetch(`${BaseURL}/decks/${deckId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(dispatch({type:'DELETE_DECK', payload: null}))
}

export const changeFormMode = (mode) => {
  return (dispatch) => dispatch({type: 'CHANGE_FORM_MODE', payload: mode})
}

export const changeTab = (tabName) => {
  return (dispatch) => dispatch({type: 'CHANGE_TAB', payload: tabName})
}

export const changeInReview = (bool) => {
  return(dispatch) =>  dispatch({type: 'CHANGE_IN_REVIEW', payload: bool})
}
