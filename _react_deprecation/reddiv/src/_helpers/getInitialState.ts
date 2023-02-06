import {takeArguments} from 'string-fn'

const aa = takeArguments(window.location.href)

console.log(aa)

export function getInitialState(): ScrollStore {
  return {
    currentIndex: 0,
    db: [],
    ready: false,
    subreddit:'pic',
    upLimit:2,
  }
}
