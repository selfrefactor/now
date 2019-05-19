import './style.scss'
import React, { useReducer } from 'react'
import { render } from 'react-dom'
import {
  getCurrentState,
  setCurrentState,
  createReducer,
  componentDidMountRaw,
} from 'reduxed'

import { clickBee } from './bees/click.js'
import { appendPortalBee } from './bees/appendPortal.js'
import { tickBee } from './bees/tick.js'
import { Grid, Cell } from '../../../../stories/src/Grid/component.js'
import {  once, shuffle, _, defaultTo, filter, headObject } from 'rambdax'
import {  takeArguments } from 'string-fn'
import { sentryAnt, captureExceptionAnt } from './ants/sentry.js'
sentryAnt()

const allReducers = []
const initialState = {
  play: true,
  currentInstance: {}
}

function rootReducer(state, action){
  switch (action.type){
  case 'CLICK':
    return {
      ...state,
      play : !state.play,
    }
  case 'SET_CURRENT':
    return {
      ...state,
      currentInstance: action.payload
    }
  default:
    return state
  }
}

const asyncSideEffects = {
  NEXT : async (state, action, getState) => {
    console.log(getState().currentInstance);
    
    const dataRaw = await window.fetch(
      `http://localhost:3030/stack-overflow/${action.payload}`
    )
    const data = await dataRaw.json()
    console.log(data.length);
      
    if(data.length === 0)      return false
    const currentInstance = shuffle(data)[0]  
    appendPortalBee(currentInstance)
    
    return {type: 'SET_CURRENT', payload: currentInstance}
  }
}

const reducer = createReducer(
  rootReducer,
  allReducers,
  getCurrentState,
  asyncSideEffects,
  captureExceptionAnt,
)

const componentDidMountFn = (dispatchInstance) => {
  componentDidMountRaw(dispatchInstance)
  
  const child = document.createElement('div')
  const childSecond = document.createElement('div')
  child.id = 'portal'
  childSecond.id = 'portal-second'
  document.body.appendChild(child)
  document.body.appendChild(childSecond)

  const {play,...rest} = takeArguments(window.location.href,'?',true)
  const playValue = defaultTo(3, play)

  const filtered = filter(Boolean, rest)
  if(Object.keys(filtered).length !== 1){
    return tickBee(getCurrentState, playValue, 'all')
  }

  const {prop} = headObject(filtered)
  tickBee(getCurrentState, playValue, prop)
}
const componentDidMount = once(componentDidMountFn)

function Root(){
  const [ store, dispatch ] = useReducer(
    reducer,
    getCurrentState(initialState)
  )
  setCurrentState(store)
  componentDidMount(dispatch)

  const buttonText = store.play ?
    'STOP' :
    'PLAY'  

  return (
    <Grid>
      
      <Cell 
        evalStyled='outline: 1px solid pink'
        height= {20}
        width= {20}
        topLeft= {{
          x: 5,
          y: 5,
        }}
      >
        
      </Cell>

      <Cell 
        evalStyled='width:100%;outline: 1px solid grey;z-index:1000;background: #dae1fafa'
        height= {2}
        width= {2}
        topLeft= {{
          x: 14,
          y: 0,
        }}
      >
        <div className='button' onClick={clickBee}>
          <div>{buttonText}</div>
        </div>
      </Cell>

    </Grid>
  )
}

render(<Root />, document.getElementById('root'))
