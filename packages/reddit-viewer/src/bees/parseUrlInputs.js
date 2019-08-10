import {
  defaultToStrict,
  filter,
  headObject,
} from 'rambdax'

const KEY = 'REDDIT_VIEWER_PLAY'
const DEFAULT_SUBREDDIT = 'ProgrammerHumor'
// const DEFAULT_SUBREDDIT = 'programminghumor'

export const parseUrlInputsBee = input => {
  const subredditRaw = filter(
    x => x === true,
    input
  )
  const { prop } = headObject(defaultToStrict(
    { [ DEFAULT_SUBREDDIT ] : true },
    subredditRaw
  ))
  if (input.play){
    localStorage.setItem(KEY, input.play)
  } else {
    localStorage.setItem(KEY, '7')
  }

  return {
    specialMode : input.special !== undefined,
    specialTick : input.special,
    subreddit   : prop,
    play        : Number(localStorage.getItem(KEY)),
  }
}
