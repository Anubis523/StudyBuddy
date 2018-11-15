const initialState = {
  currentUser: {},
  isAuthed: false,
  activeItem: 'DECKS',
  selectedDeck: {},
  currentDecks: [],
  currentCards: [],
  browsingDeck: {},
  browsingCard: {},
  selectedCard: {},
  deckFormMode: '',
  inReview: false,
  formMode: ''
}

const appReducer = (state = initialState, { type, payload}) => {
  switch (type) {

    case 'CHANGE_DECK_FORM_MODE':
      return {...state, deckFormMode: payload}

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
      return {...state, activeItem: payload, currentCards: [], inReview: false}

    case 'GET_DECK_CARDS':
      return {...state, currentCards: payload}

    case 'BROWSE_DECK':
      return {...state, browsingDeck: payload}

    case 'SELECT_DECK':
      return {...state, selectedDeck: payload}

    case 'EDIT_DECK':
      let currentDecks = [...state.currentDecks]
      let alterDecks = currentDecks.map(deck => {
        if (deck.id === payload.id) {
          return payload
        } else {
          return deck
        }
      })
      return {...state, selectedDeck: payload, currentDecks: alterDecks}

    case 'DELETE_DECK':
      currentDecks = [...state.currentDecks]
      alterDecks = currentDecks.filter(deck => deck.id !== payload)
      return {...state, currentDecks: alterDecks }

    case 'GET_CARD_POOL':
      return {...state, currentCards: payload}

    case 'GET_DECKS':
      return {...state, currentDecks: payload}  

    case 'ADD_DECK':
      let currentDeckClone = [...state.currentDecks, payload]
      return {...state, currentDecks: currentDeckClone}
    
    case 'EDIT_CARD':
      return{...state, selectedCard: payload}

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