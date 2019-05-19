import './style.scss'
import React, { useReducer } from 'react'
import { render } from 'react-dom'
import {
  getCurrentState,
  setCurrentState,
  createReducer,
  componentDidMountRaw,
} from 'reduxed'

import { handleNext } from './handles/next.js'
import { Grid, Cell } from '../../../../stories/src/Grid/component.js'
import {  once, shuffle, getter, setter } from 'rambdax'
import { sentryAnt, captureExceptionAnt } from './ants/sentry.js'
sentryAnt()

const allReducers = []
const initialState = {
  a        : 1,
}

function rootReducer(state, action){
  
  switch (action.type){
  case 'INC':
    return {
      ...state,
      a : state.a + 1,
    }
  default:
    return state
  }
}

let portalHolder

function appendPortal({accepted_answer_id, link}){
  const answer = `${link}/${accepted_answer_id}#${accepted_answer_id}`
  const parrent = document.getElementById('portal')
  if(portalHolder !== undefined){
    parrent.removeChild(portalHolder)
  }
  const portal = document.createElement('portal');
  portal.src = answer;

  parrent.appendChild(portal)
  portalHolder = portal
}

const asyncSideEffects = {
  ANY : async (state, action, getState) => {
    console.log(2);
    
    const dataRaw = await window.fetch(
      'http://localhost:3030/stack-overflow'
    )
    const data = await dataRaw.json()
    if(data.length === 0) return false

    appendPortal(shuffle(data)[0])
    
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
  child.id = 'portal'
  document.body.appendChild(child)
}
const componentDidMount = once(componentDidMountFn)

function Root(){
  const [ store, dispatch ] = useReducer(
    reducer,
    getCurrentState(initialState)
  )
  setCurrentState(store)
  componentDidMount(dispatch)

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
        evalStyled='width:100%;outline: 1px solid grey'
        height= {2}
        width= {4}
        topLeft= {{
          x: 14,
          y: 1,
        }}
      >
        <div className='button' onClick={handleNext}>
          <div>Any</div>
        </div>
      </Cell>

    </Grid>
  )
}

render(<Root />, document.getElementById('root'))
