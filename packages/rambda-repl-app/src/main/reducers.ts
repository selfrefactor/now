import { SET_CODE, SET_RESULTS } from '../constants'

const devCode = `const result = {
  a: {b:[1,2 ,{}]},
  foo: 'bar',
  baz: null,
}
const x = [1]
x.map(()=> console.log(result))
`

const initialState: Store = {
  // code: devCode,
  code: 'const result = 1',
  result: '1',
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
