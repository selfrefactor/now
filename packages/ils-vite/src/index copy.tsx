import './root/carrier/style.css'
import './root/rxImports'
import React from 'react'
import { createRoot } from 'react-dom/client';

// LOCAL_STORAGE
///////////////////////////
import { initLocalState, masterGetter, masterSetter } from 'client-helpers-fn'
import { rootInitBee } from './bees/rootInit'
import { defaultState, initialDefaultState } from './constants'
initLocalState('ILS', initialDefaultState)
masterSetter({
  ...initialDefaultState,
  ...defaultState,
  ...masterGetter<Record<string,unknown>>()
})
 
// IMPORTS
///////////////////////////
import { connect, Provider } from 'react-redux'
import { Observable } from 'rxjs/Observable'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createElementAnt } from './ants/createElement'
import { getComposeAnt } from './ants/getCompose'

// COMPONENTS
///////////////////////////
// import { Notify } from '../notify/component'
// import { CarrierWrapped } from './root/carrier/component'

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

// ROOT_COMPONENT
///////////////////////////
class Root extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props)
    rootInitBee()
  }

  public async componentDidMount() {
    this.props.dispatch(init())
  }

  public render() {
    return (
      <div>
        foo
        {/* <Notify /> */}
        {/* <CarrierWrapped /> */}
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


const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<React.StrictMode>
  <Provider store={createdStore}>
  <RootWrapped />
</Provider>
</React.StrictMode>);
