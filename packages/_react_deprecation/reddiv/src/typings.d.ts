// ROOT
interface Store {
  navigationActive: boolean
}

interface InitialState {
  store: Store
}

interface BaseProps {
  dispatch: any
}

interface Props extends BaseProps {
  store: Store
  scrollStore: ScrollStore
}

type GetState = () => ({
  store?: Store,
  scrollStore?: ScrollStore,
})

interface ObservableStore {
  getState: GetState
}
// INJECT_COMPONENT_MARKER
// SCROLL
interface Preview {
  source: {
    url: string,
  }
}
interface DBInstance {
  ups: number
  preview?: string
  video?: string
  url?: string
  title: string
}

interface ScrollStore {
  currentIndex: number
  db: DBInstance[]
  marker?: string
  ready: boolean
  subreddit?: string
  upLimit: number
}

interface ScrollProps extends BaseProps {
  scrollStore: ScrollStore
}
// ACTION_INTERFACES
interface InitAction { type: INIT, payload?: any }
interface InputSubmitAction { type: INPUT_SUBMIT, payload: string }
interface PreinitAction { type: PREINIT, payload: string }
interface RangeChangeAction { type: RANGE_CHANGE, payload?: any }
interface ScrollFetchReadyAction { type: SCROLL_FETCH_READY }
interface FetchAction { type: SCROLL_INC | UPLIMIT_CHANGE | SCROLL_INIT_READY }
interface ScrollInitAction { type: SCROLL_INIT | INIT }
interface ScrollInitReadyAction { type: SCROLL_INIT_READY }

// COMMON
interface GetNextIndex {
  length: number
  index: number
}

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
type INIT = 'INIT'
type INPUT_SUBMIT = 'INPUT_SUBMIT'
type PREINIT = 'PREINIT'
type RANGE_CHANGE = 'RANGE_CHANGE'
type SCROLL_FETCH_READY = 'scroll@FETCH_READY'
type SCROLL_INC = 'scroll@INC'
type SCROLL_INIT = 'scroll@INIT'
type SCROLL_INIT_READY = 'scroll@INIT_READY'
type UPLIMIT_CHANGE = 'UPLIMIT_CHANGE'
