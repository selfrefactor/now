import './style.scss'
import React, { useReducer } from 'react'
import { render } from 'react-dom'
import { BAR_INCREMENT } from './constants'
import { fooInc } from './actions'
import {
  getCurrentState,
  setCurrentState,
  createReducer,
  dispatcher,
  wrapper,
  styled,
  dispatchAction,
  componentDidMountRaw,
  dispatchEvent,
} from 'reduxed'

import { initialFooStore, fooReducer } from './foo/reducer'
import { initialBarStore, barReducer } from './bar/reducer'
import { Foo } from './foo/component'
import { Bar } from './bar/component'
import { fooRouteChange, barRouteChange } from './actions'
import { delay, once } from 'rambdax'
import { sentryAnt, captureExceptionAnt } from './ants/sentry.js'
sentryAnt()

const initialState = {
  fooStore : initialFooStore,
  barStore : initialBarStore,
  sk       : false,
  a        : 1,
}

const allReducers = [
  { fooReducer },
  { barReducer },
]

function rootReducer(state, action){
  switch (action.type){
  case 'sk@TURN':
    return {
      ...state,
      sk : !state.sk,
    }
  case 'INC':
    return {
      ...state,
      a : state.a + 1,
    }
  default:
    return state
  }
}

const asyncSideEffects = {
  [ BAR_INCREMENT ] : async (state, action, getState) => {
    await delay(2000)
    dispatcher(fooInc())

    return false
  },
  'sk@TURN' : async (state, action, getState) => {
    await delay(1000)
    dispatcher({ type : 'INC' })

    return false
  },
}

const NavigationContainer = styled(
  'navagation__container',
  {
    onMouseEnter : once(dispatchAction('sk@TURN')),
    // onMouseLeave : dispatchEvent('MOUSE_OUT', 'target.innerHTML'),
  }
)

const actionsHolder = dispatch => ({
  fooNavClick : () => dispatch(fooRouteChange()),
  barNavClick : () => dispatch(barRouteChange()),
})

const reducer = createReducer(
  rootReducer,
  allReducers,
  getCurrentState,
  asyncSideEffects,
  captureExceptionAnt,
)

// called in render method as `componentDidMount(dispatch)`
// ============================================
const componentDidMount = once(componentDidMountRaw)

function Root(){
  const [ store, dispatch ] = useReducer(
    reducer,
    getCurrentState(initialState)
  )
  setCurrentState(store)
  const wrap = wrapper(store, dispatch)
  const actions = actionsHolder(dispatch)
  componentDidMount(dispatch)

  return (
    <div>
      {wrap({ Foo })}
      {wrap({ Bar })}

      <NavigationContainer>
        <span onClick={ actions.fooNavClick }>Foo</span>
        <span onClick={ actions.barNavClick }>Bar</span>
      </NavigationContainer>
    </div>
  )
}

render(<Root />, document.getElementById('root'))
