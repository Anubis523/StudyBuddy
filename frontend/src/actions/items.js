
export const changeUser = (id) => {
  return fetch(`http://localhost:3001/users/${id}`, {
    crossDomain: true
  })
    .then(user => user.json())
    .then(json =>  {
      debugger
      return { type: 'CHANGE_USER', payload: json}
    })
}


export const newUser = (newUser) => {
  return {type: 'NEW_USER', payload: newUser}
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

