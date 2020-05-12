import { CODE_CHANGE, SET_RESULTS } from '../constants'

export const codeChange = payload => ({
  type:CODE_CHANGE,
  payload
})
export const setResults = payload => ({
  type:SET_RESULTS,
  payload
})