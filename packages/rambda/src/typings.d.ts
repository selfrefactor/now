// ROOT
interface BaseProps {
  dispatch: any
}

type GetState = () => ({
  store?: Store,
})

interface ObservableStore {
  getState: GetState
}
// INJECT_COMPONENT_MARKER
// 
interface ExecCodeAction { type: SET_CODE, payload?: any }
interface CodeChangeAction { type: CODE_CHANGE, payload?: any }
type Theme = 'hc-black' | 'vs' | 'vs-dark'
interface InitAction { type: INIT, payload?: any }

interface Store {
  code: string
  classNameStatus?: string
  result: string
  logResult: any[]
  theme: Theme
}

interface Props extends BaseProps {
  store: Store
}

// ACTION_INTERFACES
// COMMON

// DEV
interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REDUX_DEVTOOLS_EXTENSION__: any
}

interface Action {
  type: string
  payload?: any
}
// CONSTANTS
type SET_CODE = 'SET_CODE'
type EXEC_CODE = 'EXEC_CODE'
type CODE_CHANGE = 'CODE_CHANGE'
type INIT = 'INIT'
