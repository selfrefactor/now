import { initialGet } from 'client-helpers'

const upLimit = initialGet({
  defaultValue: 10,
  key: 'upLimit',
})

const subreddit = initialGet({
  defaultValue: 'ProgrammerHumor',
  key: 'subreddit',
})

export function getInitialState(): ScrollStore {
  return {
    currentIndex: 0,
    db: [],
    ready: false,
    subreddit,
    upLimit,
  }
}
