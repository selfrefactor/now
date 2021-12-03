import { SET_CODE, SET_RESULTS } from '../constants'

const devCode = `
const condition = async x => {
  await R.delay(100)
  return x > 1
}
const ifFn = async x => {
  console.log(1,3,x)
  await R.delay(100)
  return x + 1
}
const elseFn = async x => {
  await R.delay(100)
  return x - 1
}

const result = await R.ifElseAsync(
  condition,
  ifFn,
  elseFn  
)(10)
`

const initialState: Store = {
  code: 'const result = R.uniq([null, undefined])',
  // code: 'const result = 1;\nconsole.log(2,3,4);',
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
