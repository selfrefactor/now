import './style.scss'
import React, { useReducer } from 'react'
import { render } from 'react-dom'
import {
  getCurrentState,
  setCurrentState,
  createReducer,
  dispatcher,
  componentDidMountRaw,
} from 'reduxed'
import {
  _,
  defaultTo,
  delay,
  filter,
  headObject,
  once,
  shuffle,
} from 'rambdax'

import { clickBee } from './bees/click.js'
import { next } from './actions'
import { appendPortalBee } from './bees/appendPortal.js'
import { tickBee } from './bees/tick.js'
import { Grid, Cell } from '../../../../stories/src/Grid/component.js'
import { takeArguments } from 'string-fn'
import { sentryAnt, captureExceptionAnt } from './ants/sentry.js'

const initialState = {
  play            : true,
  auto            : false,
  autoInterval    : 10000,
  currentInstance : {
    tags : [],
    link : '',
  },
  data : [],
}
const allReducers = []

function rootReducer(state, action){
  console.log(state, action)

  switch (action.type){
  case _.CLICK:
    return {
      ...state,
      play : !state.play,
    }
  case _.SET_CURRENT:
    return {
      ...state,
      currentInstance : action.payload,
    }
  case _.SET_DATA:
    return {
      ...state,
      data : action.payload,
    }
  default:
    return state
  }
}

const asyncSideEffects = {
  NEXT : async (state, action, getState) => {
    const dataRaw = await window.fetch(
      `http://toteff.eu.ngrok.io/stack-overflow/${ action.payload }`
    )
    const data = await dataRaw.json()

    if (data.length === 0) throw new Error('empty data')

    const currentInstance = shuffle(data)[ 0 ]

    appendPortalBee(currentInstance)
    dispatcher({
      type    : 'SET_CURRENT',
      payload : currentInstance,
    })

    return false
  },
}

const reducer = createReducer(
  rootReducer,
  allReducers,
  getCurrentState,
  asyncSideEffects,
  captureExceptionAnt,
)

const getTag = filtered => {
  if (Object.keys(filtered).length !== 1){
    return 'all'
  }

  const { prop } = headObject(filtered)

  return prop
}

const componentDidMountFn = async (dispatchInstance) => {
  sentryAnt()
  componentDidMountRaw(dispatchInstance)

  const child = document.createElement('div')
  const childSecond = document.createElement('div')
  child.id = 'portal'
  childSecond.id = 'portal-second'
  document.body.appendChild(child)
  document.body.appendChild(childSecond)

  const { play, ...rest } = takeArguments(window.location.href, '?', true)
  const playValue = defaultTo(3, play)

  const tag = getTag(filter(Boolean, rest))

  const dataRaw = await window.fetch(
    `http://toteff.eu.ngrok.io/stack-overflow/${ tag }`
  )
  const data = await dataRaw.json()

  if (data.length === 0) throw new Error('empty data')

  return tickBee(getCurrentState, playValue, data)
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
  const tags = store.currentInstance.tags.join(', ')
  const { link } = store.currentInstance

  return (
    <Grid>

      <Cell
        evalStyled="width:100%;outline: 1px solid grey;z-index:1000;background: #dae1fafa"
        height={ 2 }
        topLeft={ {
          x : 8,
          y : 0,
        } }
        width={ 2 }
      >
        <div className="button" onClick={ clickBee }>
          <div>{buttonText}</div>
        </div>
      </Cell>

      <Cell
        evalStyled="width:100%;outline: 1px solid grey;z-index:1000;background: #dae1fafa"
        height={ 2 }
        topLeft={ {
          x : 11,
          y : 0,
        } }
        width={ 2 }
      >
        <div className="button" onClick={ next }>
          <div>Next</div>
        </div>
      </Cell>

      <Cell
        evalStyled="width:100%;outline: 1px solid grey;z-index:1000;background: #dae1fafa"
        height={ 2 }
        topLeft={ {
          x : 15,
          y : 0,
        } }
        width={ 7 }
      >
        <div className="button" onClick={ clickBee }>
          <div>{tags}</div>
        </div>
      </Cell>

      <Cell
        evalStyled="width:100%;outline: 1px solid grey;z-index:1000;background: #cae1faaa"
        height={ 2 }
        topLeft={ {
          x : 23,
          y : 0,
        } }
        width={ 4 }
      >
        <div className="button">
          <div>
            <a href={ link } target="blank" >Link</a>
          </div>
        </div>
      </Cell>

    </Grid>
  )
}

render(<Root />, document.getElementById('root'))
