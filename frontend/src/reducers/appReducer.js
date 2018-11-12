const initialState = {
  currentUser: {},
  isAuthed: false,
  activeItem: 'CARDS',
  selectedDeck: {},
  currentDecks: [],
  currentCards: [],
  browsingDeck: {},
  browsingCard: {},
  selectedCard: {},
  inReview: false,
  formMode: ''
}

const appReducer = (state = initialState, { type, payload}) => {
  switch (type) {

    case 'CHANGE_IN_REVIEW':
      return {...state, inReview: payload}

    case 'CHANGE_FORM_MODE':
      return {...state, formMode: payload}
    
    case 'NEW_USER':
    case 'CHANGE_USER':
      return {...state, currentUser: payload, isAuthed: true}
    
    case 'LOG_OFF': // needs to be revised with auth
      return initialState
    
    case 'CHANGE_TAB':
      return {...state, activeItem: payload}

    case 'GET_DECK_CARDS':
      return {...state, currentCards: payload}

    case 'BROWSE_DECK':
      return {...state, browsingDeck: payload}

    case 'SELECT_DECK':
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

    case 'DELETE_CARD':
      return {...state, currentCards: payload }

    case 'ADD_CARD':
      let currentCardsClone = [...state.currentCards, payload]
      return {...state, currentCards: currentCardsClone}

    case 'SELECT_CARD':
      return {...state, selectedCard: payload}

    case 'CARD_CORRECTED':
      currentCardsClone = [...state.currentCards]
      currentCardsClone = currentCardsClone.map(card => {
        if (card.id === payload.id) {
          card = payload
        }
        return card
      })

      return {...state, currentCards: currentCardsClone }

    default:
      return state
  }
}

export default appReducer