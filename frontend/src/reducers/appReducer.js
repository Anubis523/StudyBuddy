export default function appReducer(
  state = {
    currentUser: {},
    isAuthed: false,
    // browsingUser: {},
    selectedDeck: {},
    currentDecks: [],
    currentCards: [],
    browsingDeck: {},
    browsingCard: {},
    selectedCard: {}
  }, { type, payload}
){
  switch (type) {
    
    case 'NEW_USER':
    case 'CHANGE_USER':
      return {...state, currentUser: payload, isAuthed: true}
    
    case 'LOG_OFF':
      return {...state, currentUser: {}, isAuthed: false}

    // case 'BROWSE_USER':
    //   return {...state, browingUser: payload}  

    case 'GET_DECK_CARDS':
      return {...state, currentCards: payload}

    case 'BROWSE_DECK':
      return {...state, browsingDeck: payload}

    case 'SELECT_DECK':
    case 'EDIT_DECK':
      return {...state, selectedDeck: payload}

    case 'GET_CARD_POOL':
      return {...state, currentCards: payload}

    case 'GET_DECKS':
      return {...state, currentDecks: payload}  

    case 'ADD_DECK':
      let currentDeckClone = [...state.currentDecks].push(payload)
      return {...state, currentDecks: currentDeckClone}
    
    case 'DELETE_DECK':
      return {...state, currentDecks: payload}

    case 'ADD_CARD':
      let currentCardsClone = [...state.currentCards].push(payload)
      return {...state, currentCards: currentCardsClone}

    default:
      return state
  }
}