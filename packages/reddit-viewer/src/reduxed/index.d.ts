export function reducer(
  state: object, 
  action: object, 
  rootReducer: (rootState: object, rootAction: object) => object,
  allReducers: object[]
): any

export function getCurrentState<T>(input:? any): T
export function setCurrentState<T>(input: T): void

export function componentDidMountRaw(dispach: any): void

export function createReducer(
  rootReducer: any,
  allReducers: any,
  getCurrentState: any,
  asyncSideEffects?: any, // default is {}
  onError?: (x:any) => void
): any
export function producePair(input: any): any
export function wrapper(input: any): any
export function styled(className: string, optionsAndProps: any): any

export function dispatchAction(input: any): any
export function dispatchEvent(input: any): any
export function dispatcher(input: any): any

interface Action{
  type: string,
  payload?: any
}
export function pipe(...actions: Array<Action>): void

export function colorLog(
  logIndex: number | undefined, 
  label: string, 
  input?: any 
): void
export function log(
  label: string, 
  input: any, 
  logIndex?: number, 
): void
