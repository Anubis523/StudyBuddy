const BaseURL = 'http://localhost:3001'
export const changeUser = (id) => {
  return (dispatch) =>  fetch(`${BaseURL}/users/${id}`)
    .then(user => user.json())
    .then(json =>  dispatch({ type: 'CHANGE_USER', payload: json}))
}

export const login = (user) => {
  return (dispatch) => fetch(`${BaseURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }, body: JSON.stringify({user: user})
  }).then(res => res.json())
  .then(data => {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    dispatch({ type: 'CHANGE_USER', payload: data.user})
    dispatch({ type: 'CHANGE_TOKEN', payload: localStorage.token})
  }).catch(err => console.log(err))
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
  .then(data => {
    localStorage.setItem('token', data.token)
    dispatch({ type: 'CHANGE_TOKEN', payload: localStorage.token})
    dispatch({type: 'NEW_USER', payload:data.user})
  })
}

export const logOff = () => {
  return (dispatch) => {
    dispatch({type: 'LOG_OFF', payload: null})
  }
}

export const editDeck = (id, editDeck) =>{
  return (dispatch) => fetch (`${BaseURL}/decks/${id}/edit`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(editDeck)
  }).then( res => res.json())
  .then(editDeck => dispatch({type: 'EDIT_DECK', payload: editDeck}))
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
  }).then(dispatch({type:'DELETE_DECK', payload: deckId}))
}

export const changeFormMode = (mode) => {
  return (dispatch) => dispatch({type: 'CHANGE_FORM_MODE', payload: mode})
}

export const changeTab = (tabName) => {
  return (dispatch) => dispatch({type: 'CHANGE_TAB', payload: tabName})
}

export const setUser = (user) => {
  return (dispatch) => dispatch({ type: 'SET_USER', payload: user})
}

export const changeInReview = (bool) => {
  return(dispatch) =>  dispatch({type: 'CHANGE_IN_REVIEW', payload: bool})
}

export const changeDeckFormMode  = (mode) => {
  return (dispatch) => dispatch({ type: 'CHANGE_DECK_FORM_MODE', payload: mode})
}

export const changeToken = token => {
  return (dispatch) => dispatch({ type: 'CHANGE_TOKEN', payload: token })
} 
