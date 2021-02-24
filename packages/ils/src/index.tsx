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
  ...masterGetter()
})
 
// IMPORTS
///////////////////////////
import * as React from 'react'
import { render } from 'react-dom'
import { switcher } from 'rambdax'
import * as Sentry from '@sentry/browser'
import { connect, Provider } from 'react-redux'
import { Observable } from 'rxjs/Observable'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createElementAnt } from './ants/createElement'
import { getComposeAnt } from './ants/getCompose'

// COMPONENTS
///////////////////////////
import { Notify } from '../notify/component'
// import { ChooseWordWrapped } from './choose_word/component'
// import { GuessWordWrapped } from './guess_word/component'
import { CarrierWrapped } from './root/carrier/component'
import { LearningMemeWrapped } from './learning_meme/component'
import { SelectArticleWrapped } from './select_article/component'
import { WriteSentenceWrapped } from './write_sentence/component'

const AllComponents = {
  LearningMemeWrapped,
  SelectArticleWrapped,
  WriteSentenceWrapped
}

const currentComponentKey = switcher(process.env.CURRENT_COMPONENT)
  .is('learning.meme', 'LearningMeme')
  .is('select.article', 'SelectArticle')
  .is('write.sentence', 'WriteSentence')
  .default('learning.meme')

const CurrentComponent = AllComponents[`${currentComponentKey}Wrapped`]
  
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
const createdStore = createStore(
  combinedReducers,
  composeEnhancers(
    applyMiddleware(
      epicMiddleware
  ))
)

const API_URL = 'https://lambdas-fn.now.sh/api/api'

// ROOT_COMPONENT
///////////////////////////
class Root extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props)
    rootInitBee()
  }

  public async initDatabase(password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
  };
    const response = await window.fetch(API_URL, requestOptions)
    const data = await response.json()
    localStorage.setItem(DATABASE, JSON.stringify(data))
    return this.props.dispatch(init())
  }

  public async componentDidMount() {
    Sentry.init({
      dsn: 'https://c57bf6cbb9fc431fb3f326f31745f93f@sentry.io/123126',
    })
    const localPassword = localStorage.getItem(PASSWORD)
    const localDatabase = localStorage.getItem(DATABASE)
    if(localDatabase) return this.props.dispatch(init())
    if(localPassword) return this.initDatabase(localPassword)

    const password = prompt('Enter password!')
    localStorage.setItem(PASSWORD, password)
    this.initDatabase(password)
  }

  public componentDidCatch(e) {
    Sentry.captureException(e)
  }

  public render() {
    return (
      <div>
        <Notify />
        <CarrierWrapped />
        <CurrentComponent/>
      </div>
    )
  }
}

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
