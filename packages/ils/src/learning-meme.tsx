import './root/carrier/style.css'
import './root/rxImports'

// LOCAL_STORAGE
///////////////////////////
import { initLocalState, masterGetter, masterSetter } from 'client-helpers-fn'
import { rootInitBee } from './bees/rootInit'
import { defaultState, initialDefaultState } from './constants'
initLocalState('ILS', initialDefaultState)
masterSetter({
  ...initialDefaultState,
  ...defaultState,
  ...masterGetter()
})
 
// IMPORTS
///////////////////////////
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router'
import * as React from 'react'
import { render } from 'react-dom'

import * as Sentry from '@sentry/browser'
import { connect, Provider } from 'react-redux'
import { Observable } from 'rxjs/Observable'

import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { createElementAnt } from './ants/createElement'
import { getComposeAnt } from './ants/getCompose'

// COMPONENTS
///////////////////////////
import { Notify } from '../notify/component'
// import { ChooseWordWrapped } from './choose_word/component'
// import { GuessWordWrapped } from './guess_word/component'
import { LearningMemeWrapped } from './learning_meme/component'
import { CarrierWrapped } from './root/carrier/component'
// import { SelectArticleWrapped } from './select_article/component'
// import { WriteSentenceWrapped } from './write_sentence/component'

// INTERNAL_MODULES
///////////////////////////
import { getJsonBee } from './bees/getJson'

import { postBee } from './bees/post'
import { init } from './root/actions'
import { combinedReducers } from './root/combinedReducers'

const postRequest = (
  url,
  body,
) => Observable.fromPromise(postBee(url, body))

const getJson = url => Observable.fromPromise(
  getJsonBee(url),
)

// EPICS
///////////////////////////
import { rootEpic } from './root/epics/'
const dependencies = {
  getJson: getJson,
  postRequest: postRequest,
}

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies })

// BOILERPLATE
///////////////////////////
const id = 'react-container'
createElementAnt(id)
const composeEnhancers = getComposeAnt()

// CREATE_STORE
///////////////////////////
const history = createBrowserHistory()
const createdStore = createStore(
  connectRouter(history)(combinedReducers),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware),
  ),
)

// ROOT_COMPONENT
///////////////////////////
class Root extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props)
    rootInitBee()
  }

  public componentDidMount() {
    Sentry.init({
      dsn: 'https://c57bf6cbb9fc431fb3f326f31745f93f@sentry.io/123126',
    })
    this.props.dispatch(init())
  }

  public componentDidCatch(e) {
    Sentry.captureException(e)
  }

  public render() {
    return (
      <div>
        <Notify />
        <CarrierWrapped />
        <LearningMemeWrapped/>
      </div>
    )
  }
}

// CONNECT_COMPONENT
const connectRootComponent = ({
  store,
  navigationStore,
}) => ({
  navigationStore,
  store,
})

const RootWrapped = connect(connectRootComponent)(Root)

render(
  <Provider store={createdStore}>
    <RootWrapped />
  </Provider>,
  document.getElementById(id),
)
