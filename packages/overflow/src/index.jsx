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
import {  once, shuffle, getter, setter, _ } from 'rambdax'
import { sentryAnt, captureExceptionAnt } from './ants/sentry.js'
sentryAnt()

const allReducers = []
const initialState = {
  play: true
}

function rootReducer(state, action){
  
  switch (action.type){
  case 'CLICK':
    return {
      ...state,
      play : !state.play,
    }
  default:
    return state
  }
}

const asyncSideEffects = {
  NEXT : async (state, action, getState) => {
    const dataRaw = await window.fetch(
      'http://localhost:3010/stack-overflow'
    )
    const data = await dataRaw.json()
    if(data.length === 0) return false

    appendPortalBee(shuffle(data)[0])
    
    return false
  }
}

const reducer = createReducer(
  rootReducer,
  allReducers,
  getCurrentState,
  asyncSideEffects,
  captureExceptionAnt,
)

// called in render method as `componentDidMount(dispatch)`
// ============================================
const componentDidMountFn = (dispatchInstance) => {
  componentDidMountRaw(dispatchInstance)
  const child = document.createElement('div')
  const childSecond = document.createElement('div')
  child.id = 'portal'
  childSecond.id = 'portal-second'
  document.body.appendChild(child)
  document.body.appendChild(childSecond)
  tickBee(getCurrentState)
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
