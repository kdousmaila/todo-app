// Reducer : gère les actions ajouter, basculer (cocher) et supprimer
export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: Date.now(), text: action.text, done: false },
      ]
    case 'TOGGLE':
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      )
    case 'DELETE':
      return state.filter((t) => t.id !== action.id)
    default:
      return state
  }
}
