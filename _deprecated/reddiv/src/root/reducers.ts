import { TOGGLE_NAVIGATION, UPLIMIT_CHANGE } from '../constants'

const initialState: Store = {
  navigationActive: false,
}

export function store(
  state: Store = initialState,
  action: Action,
): Store {

  switch (action.type) {
    case UPLIMIT_CHANGE:
      return {
        ...state,
        ...initialState,
      }
    case TOGGLE_NAVIGATION:
      return {
        ...state,
        navigationActive: !state.navigationActive,
      }
    default:
      return state
  }
}
