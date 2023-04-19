// STYLES
import './navigation/style.css'
import './root/rxImports'
import './scroll/style.less'

// IMPORTS
import createHistory from 'history/createBrowserHistory'
import { head } from 'rambdax'
import { pascalCase, takeArguments } from 'string-fn'
import * as React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getJSON as getJSONModule } from './_modules/getJSON'
import { getRequest } from './_modules/getRequest'
import { init, preinit } from './root/actions'
import { combinedReducers } from './root/combinedReducers'

export const history = createHistory()
const middleware = routerMiddleware(history)

// COMPONENTS
import { NavigationWrapped } from './navigation/component'
import { ScrollWrapped } from './scroll/component'

// EPICS
import { rootEpic } from './root/epics/'

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
const getJSON = url => Observable.fromPromise(getJSONModule(url))
const dependencies = {
  getJSON,
  getRequest,
}

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies })

// CREATE_STORE
const createdStore = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(middleware), applyMiddleware(epicMiddleware)),
)

function getSubreddit(url: string): false | string{
  const keys = Object.keys(takeArguments(url))
  if(keys.length === 0) return false

  return head(keys)
}

// ROOT_COMPONENT
class Root extends React.Component<Props, {}> {
  public componentDidMount() {
    const subreddit = getSubreddit(window.location.href)
    if (subreddit === false){
      this.props.dispatch(init())
    }else{
      this.props.dispatch(preinit(subreddit))
      document.title = pascalCase(subreddit)
    }
  }

  public render() {
    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
            <NavigationWrapped />

            <Route component={ScrollWrapped} path='/' />
            {/* ROUTES_MARKER */}

          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

// CONNECT_COMPONENT
const connectComponent = ({ store, navigationStore }) => ({ store, navigationStore })

const RootWrapped = connect(connectComponent)(Root as any)

render(
  <Provider store={createdStore}>
    <RootWrapped />
  </Provider>,
  document.getElementById(id),
)
