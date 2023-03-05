import './root/carrier/style.css'
import './root/rxImports'
// LOCAL_STORAGE
///////////////////////////
import { initLocalState, masterGetter, masterSetter } from 'client-helpers-fn'
import { rootInitBee } from './bees/rootInit'
import { defaultState, initialDefaultState, PASSWORD, DATABASE } from './constants'
initLocalState('ILS', initialDefaultState)
masterSetter({
  ...initialDefaultState,
  ...defaultState,
  ...masterGetter<Record<string,unknown>>()
})

import React from 'react'
import {render} from 'react-dom'
import { omit, switcher } from 'rambdax'
import * as Sentry from '@sentry/browser'
import { connect, Provider } from 'react-redux'
import { Observable } from 'rxjs/Observable'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createElementAnt } from './ants/createElement'
import { getComposeAnt } from './ants/getCompose'

render(
  <React.StrictMode>
    <div>foo bar</div>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
