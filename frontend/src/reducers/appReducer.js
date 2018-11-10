export default function appReducer(
  state = {
    currentUser: {},
    isAuthed: false,
    // browsingUser: {},
    activeItem: 'CARDS',
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
    
    case 'LOG_OFF': // needs to be revised with auth
      return {...state, currentUser: {},
      isAuthed: false,
      activeItem: 'CARDS',
      selectedDeck: {},
      currentDecks: [],
      currentCards: [],
      browsingDeck: {},
      browsingCard: {},
      selectedCard: {}}
    
    case 'CHANGE_TAB':
      return {...state, activeItem: payload}

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
      let currentDeckClone = [...state.currentDecks, payload]
      return {...state, currentDecks: currentDeckClone}
    
    case 'EDIT_CARD':
      return{...state, selectedCard: payload}
    
    case 'DELETE_DECK':
      return state

    case 'ADD_CARD':
      let currentCardsClone = [...state.currentCards, payload]
      return {...state, currentCards: currentCardsClone}

    case 'SELECT_CARD':
      return {...state, selectedCard: payload}

    default:
      return state
  }
}