import { createSelector } from 'reselect'

const markerSelector = store => store.marker
const subredditSelector = store => store.subreddit
const currentIndexSelector = store => store.currentIndex
const dbLengthSelector = store => store.db.length
const dbSelector = store => store.db

const fetchConditionsSelector = createSelector(
  currentIndexSelector,
  dbLengthSelector,
  (currentIndex, dbLength) => ({ currentIndex, dbLength }),
)

const commonsSelector = createSelector(
  currentIndexSelector,
  dbSelector,
  (currentIndex, db) => ({ currentIndex, db }),
)

export const getMarker = store => markerSelector(
  store.getState().scrollStore,
)

export const getFetchConditions = store => fetchConditionsSelector(
  store.getState().scrollStore,
)

export const getCommons = store => commonsSelector(
  store.getState().scrollStore,
)

export const getSubreddit = store => subredditSelector(
  store.getState().scrollStore,
)
