import './style.scss'
import React, { useReducer } from 'react'
import { render } from 'react-dom'
import {
  INC_INDEX,
  SET_DB,
} from './constants'
import {
  dispatchEvent,
  getCurrentState,
  setCurrentState,
  createReducer,
  componentDidMountRaw,
} from './reduxed/src/index.js'
import * as Sentry from '@sentry/browser'
import { nextIndex, once } from 'rambdax'
import { takeArguments } from 'string-fn'
import { initLocalState, getter } from 'client-helpers'

Sentry.init({ dsn: 'https://c57bf6cbb9fc431fb3f326f31745f93f@sentry.io/123126' })

export const captureException = x => Sentry.captureException(x)

initLocalState('REDDIT_VIEWER')

import {
  Cell,
  Grid,
  ImageHypno,
  ImageLocalStorage,
  VideoStretched,
  ImageStretched,
} from '../stories'

import { parseUrlInputsBee } from './bees/parseUrlInputs'
import { updateDbBee } from './bees/updateDb'
import { allowRenderBee } from './bees/allowRender'
import { playBee } from './bees/play'

const {
  subreddit,
  play,
  specialMode,
  specialTick,
} = parseUrlInputsBee(
  takeArguments(
    window.location.href,
    undefined,
    true
  )
)
document.title = subreddit

const initialState = {
  db      : [],
  index   : 0,
  marker  : undefined,
  loading : false,
  play,
  subreddit,
}

function incIndexAnt(state){
  const index = nextIndex(state.index, state.db)
  const isGif = state.db[ index ].type === 'gif'

  return {
    ...state,
    index,
    loading : isGif,
  }
}

function rootReducer(state, action){
  switch (action.type){
  case SET_DB:
    return {
      ...state,
      marker : action.payload.marker,
      db     : [ ...state.db, ...action.payload.db ],
    }
  case 'GIF_READY':
    return {
      ...state,
      loading : false,
    }
  case INC_INDEX:
    return incIndexAnt(state)
  default:
    return state
  }
}

const reducer = createReducer(
  rootReducer,
  [],
  getCurrentState,
)

const componentDidMount = once(async dispatch => {
  componentDidMountRaw(dispatch)
  await updateDbBee(subreddit)
  if (specialMode) return
  playBee(getCurrentState)
})

let Holder
let prevStore

function shouldRender(store){
  if (prevStore === undefined){
    prevStore = store

    return false
  }
  const result = allowRenderBee(prevStore, store)
  prevStore = store

  return result
}

function getHypnoList({ subreddit }){
  return getter('CONVERTED').filter(
    key => key.startsWith(`${ subreddit }-`)
  )
}

function renderImageData(store){
  const { src } = store.db[ store.index ]

  return {
    src,
    uniqKey : `${ store.subreddit }-${ src }`,
  }
}

function Root(){
  const [ store, dispatch ] = useReducer(
    reducer,
    getCurrentState(initialState)
  )

  setCurrentState(store)
  componentDidMount(dispatch)
  if (store.db.length === 0) return null

  const currentInstance = store.db[ store.index ]
  const isImage = !specialMode && currentInstance.type === 'image'
  const isGif = !specialMode && currentInstance.type === 'gif'
  const isVideo = !specialMode && currentInstance.type === 'video'

  if (shouldRender(store) || Holder === undefined){
    Holder =
      (<Grid>
        <Cell
          height={ 32 }
          topLeft={ {
            x : 0,
            y : 0,
          } }
          width={ 32 }
        >
          {isImage && (
            <ImageLocalStorage {...renderImageData(store)} />
          )}

          {isGif && (
            <ImageStretched
              callback={dispatchEvent('GIF_READY')}
              src={currentInstance.src}
            />
          )}

          {isVideo && (
            <VideoStretched {...currentInstance} />
          )}

          {specialMode && (
            <ImageHypno
              hypnoList={getHypnoList(store)}
              tick={specialTick}
            />
          )}
        </Cell>
      </Grid>)

  }

  return Holder
}

render(<Root />, document.getElementById('root'))
