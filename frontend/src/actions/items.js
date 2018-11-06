
export const changeUser = (id) => {
  return (dispatch) =>  fetch(`http://localhost:3001/users/${id}`)
    .then(user => user.json())
    .then(json =>  dispatch({ type: 'CHANGE_USER', payload: json}))
}

export const newUser = (userObj) => {
  return (dispatch) => fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userObj)
  }).then(res => res.json())
  .then(user => dispatch({type: 'NEW_USER', payload:user}))
}

export const browseUser = (otherUser) => {
  return {
    type: 'BROWSE_USER',
    payload: otherUser
  }
}

export const editDeck = (editDeck) =>{
  return {
    type: 'EDIT_DECK',
    payload: editDeck
  }
}

export const browseDeck = (browseDeck) =>{
  return {
    type: 'BROWSE_DECK',
    payload: browseDeck
  }
}

