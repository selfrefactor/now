import {takeArguments} from 'string-fn'

const input = takeArguments(window.location.href)

let subreddit = Object.keys(input).length !== 1 ? 'ProgrammerHumor' : input[Object.keys(input)[0]]  

export function getInitialState(): ScrollStore {
  return {
    currentIndex: 0,
    db: [],
    ready: false,
    subreddit,
    upLimit:2,
  }
}
