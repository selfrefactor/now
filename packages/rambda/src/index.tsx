// STYLES
import './root/vivify.css'
import './style.less'
import './root/rxImports'

// COMPONENTS
import { MainWrapped } from './main/component'

// EPICS
import { rootEpic } from './root/epics/'
import { rootReducer } from './root/reducers'

// IMPORTS
import { createEpicMiddleware } from 'redux-observable'

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'


// BOILERPLATE
const id = 'react-container'
const element = document.createElement('div')
element.setAttribute('id', id)
document.body.appendChild(element)

const composeEnhancers = process.env.NODE_ENV === 'production' ?
  compose :
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === undefined ?
    compose :
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// EPIC_DEPENDENCIES
const dependencies = {}

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies })

// CREATE_STORE
const createdStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
)

render(
  <Provider store={createdStore}>
    <MainWrapped />
  </Provider>,
  document.getElementById(id),
)

if (module.hot) {
  module.hot.accept('./root/epics/', () => {
    const rootEpicHot = require('./root/epics/').default
    epicMiddleware.replaceEpic(rootEpicHot)
  })
}
