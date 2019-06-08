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
  log,
  logInit,
  defaultTo,
  nextIndex,
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
logInit({ logFlag: true })

const initialState = {
  auto: false,
  tag: 'all',
  currentInstance: {
    tags: [],
    link: '',
  },
  index: 0,
  limitIndex: 1,
  data: [],
}
const allReducers = []

function rootReducer(state, action){
  log(state, action)

  switch (action.type){
  case _.SET:
    return {
      ...state,
      ...action.payload,
    }
  case _.SET_CURRENT:
    return {
      ...state,
      ...action.payload,
    }
  case _.SET_DATA:
    return {
      ...state,
      ...action.payload,
    }
  default:
    return state
  }
}

async function whenNewLimit(limitIndex, tag){
  log(limitIndex, tag)

  const dataRaw = await fetchData(tag, Math.floor(limitIndex * 20) + 30)

  const data = shuffle(dataRaw)
  const payload = {
    limitIndex: limitIndex + 1,
    data,
    index: 0,
    currentInstance: data[ 0 ],
  }
  log({ payload })

  dispatcher({
    type: _.SET,
    payload,
  })
}

const asyncSideEffects = {
  // todo {state,action, ...})
  NEXT: async (state, action, getState) => {
    const { data, index, limitIndex, tag } = getState()

    const newIndex = nextIndex(index, data)
    log({
      index,
      newIndex,
      l: data.length,
    })
    const shouldRequest =
      data.length % 10 === 0 && Math.floor(data.length / 10) === limitIndex

    if (newIndex === 0 || shouldRequest){
      await whenNewLimit(limitIndex, tag)

      return false
    }

    const currentInstance = data[ newIndex ]
    log({ currentInstance })


    appendPortalBee(currentInstance)
    dispatcher({
      type: 'SET_CURRENT',
      payload: {
        currentInstance,
        index: newIndex,
      },
    })

    return false
    /**
     * TODO retun state from here instead of above
     */
  },
}

const reducer = createReducer(
  rootReducer,
  allReducers,
  getCurrentState,
  asyncSideEffects,
  captureExceptionAnt
)

const getTag = filtered => {
  if (Object.keys(filtered).length !== 1) return 'all'

  const { prop } = headObject(filtered)

  return prop
}

export async function fetchData(tag, limit){
  const limitPart = limit ? `/${ limit }` : ''
  const requestUrl = `https://toteff.eu.ngrok.io/stack-overflow/${ tag }${ limitPart }`
  log({ requestUrl })

  const dataRaw = await window.fetch(requestUrl)
  const data = await dataRaw.json()

  if (data.length === 0) throw new Error('empty data')

  return data
}

const componentDidMountFn = async dispatchInstance => {
  sentryAnt()
  componentDidMountRaw(dispatchInstance)

  const child = document.createElement('div')
  const childSecond = document.createElement('div')
  child.id = 'portal'
  childSecond.id = 'portal-second'
  document.body.appendChild(child)
  document.body.appendChild(childSecond)

  const { play, auto, ...rest } = takeArguments(window.location.href, '?', true)
  const playValue = defaultTo(3, play)
  const tag = getTag(filter(Boolean, rest))

  const data = await fetchData(tag, 40)

  return tickBee(playValue, shuffle(data), tag, auto)
}

const componentDidMount = once(componentDidMountFn)

function Root(){
  const [ store, dispatch ] = useReducer(
    reducer,
    getCurrentState(initialState)
  )
  setCurrentState(store)
  componentDidMount(dispatch)

  const tags = store.currentInstance.tags.join(', ')
  const { link, accepted_answer_id } = store.currentInstance

  const answer = `${ link }/${ accepted_answer_id }#${ accepted_answer_id }`

  return (
    <Grid>
      <Cell
        evalStyled='width:100%;z-index:1000;'
        height={2}
        topLeft={{
          x: 11,
          y: 0,
        }}
        width={2}
      >
        <div className='button' onClick={next}>
          <div>Next</div>
        </div>
      </Cell>

      <Cell
        evalStyled='width:100%;z-index:1000;'
        height={2}
        topLeft={{
          x: 15,
          y: 0,
        }}
        width={7}
      >
        <div className='button' onClick={clickBee}>
          <div>{tags}</div>
        </div>
      </Cell>

      <Cell
        evalStyled='width:100%;z-index:1000;'
        height={2}
        topLeft={{
          x: 23,
          y: 0,
        }}
        width={4}
      >
        <div className='button'>
          <div>
            <a href={answer} target='blank'>
              Link
            </a>
          </div>
        </div>
      </Cell>
    </Grid>
  )
}

render(<Root />, document.getElementById('root'))
