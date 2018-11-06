export default function appReducer(
  state = {
    currentUser: {},
    browsingUser: {},
    editingDeck: {},
    browsingDeck: {},
    browsingCard: {},
    selectedCard: {}
  }, { type, payload}
){
  switch (type) {
    case 'NEW_USER':
      return null // add fetch to post new user by info

    case 'CHANGE_USER':
      return {...state, currentUser: payload}
    
    case 'BROWSE_USER':
      return {...state, browingUser: payload}  

    case 'BROWSE_DECK':
      return {...state, browsingDeck: payload}

    case 'EDIT_DECK':
      return {...state, editingDeck: payload}

    default:
      return state
  }
}