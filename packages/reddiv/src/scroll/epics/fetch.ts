import { SCROLL_INC, SCROLL_INIT_READY, UPLIMIT_CHANGE } from '../../constants'
import {
  getFetchConditions,
  getMarker,
  getSubreddit,
} from './../../_modules/selectors'

import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { fetchReady } from '../actions'

import { saveUplimit } from '../../_helpers/saveUplimit'
import { scrollToTop } from '../../_helpers/scrollToTop'
import { extractMarker } from '../_modules/extractMarker'
import { fetchReadyReaction } from '../_modules/fetchReadyReaction'

const NEW_POSTS = 100
const BUFFER = 50
const DEFAULT_LIMIT = 0
const LIMIT = 20

function buildURL(store: ObservableStore) {
  const base = 'https://www.reddit.com/r'
  const subreddit = getSubreddit(store)
  const marker = getMarker(store)
  const params = `count=${NEW_POSTS}&limit=${NEW_POSTS}&after=${marker}`

  return `${base}/${subreddit}/new.json?${params}`
}

export const fetchEpic = (
  action$: ActionsObservable<FetchAction>,
  store: ObservableStore,
  { getRequest },
): Observable<any> =>

  action$
    .ofType(SCROLL_INC, UPLIMIT_CHANGE, SCROLL_INIT_READY)
    .filter(() => {
      const { dbLength, currentIndex } = getFetchConditions(store)

      return dbLength - currentIndex < BUFFER
    })
    .switchMap(() =>  new Observable(observer => {
      getRequest(buildURL(store)).subscribe((response: any) => {
        const scrollStore = store.getState().scrollStore
        let db = fetchReadyReaction(scrollStore, response)

        const marker = extractMarker(response)
        let {upLimit} = scrollStore

        if (db.length < LIMIT){
          scrollToTop()
          saveUplimit(DEFAULT_LIMIT)

          upLimit = DEFAULT_LIMIT
          const newState = {
            ...scrollStore,
            upLimit: DEFAULT_LIMIT,
          }
          db = fetchReadyReaction(newState, response)
        }

        observer.next(fetchReady({db, marker, upLimit}))
        observer.complete()
      })
    }),
  )
