import { SET_CODE, SET_RESULTS } from '../constants'

const initialState: Store = {
  code: `
  const result = R.includes(1)([1,2,3])
  `.trim(),
  result: '',
  classNameStatus: 'vivify pullUp duration-250',
  logResult: [],
  theme: 'vs-dark',
}

function toggleAnimation(state){
  if(state.classNameStatus === 'vivify pullUp duration-250'){
    return 'vivify fadeIn duration-250'
  }

  return 'vivify pullUp duration-250'
}

export function store(
  state: Store = initialState,
  action: Action,
): Store {
  switch (action.type) {
    case SET_CODE:
      return {
        ...state,
        code: action.payload,
      }
    case SET_RESULTS:
      return {
        ...state,
        ...action.payload,
        classNameStatus: toggleAnimation(state)
      }
    default:
      return state
  }
}
