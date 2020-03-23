import { ActionsObservable } from 'redux-observable'
import { saveUplimit } from '../../_helpers/saveUplimit'
import { scrollToTop } from '../../_helpers/scrollToTop'
import { RANGE_CHANGE } from '../../constants'
import { uplimitChange } from '../actions'

export const handleRangeEpic = (
  action$: ActionsObservable<RangeChangeAction>,
  store,
): any =>
  action$
    .ofType(RANGE_CHANGE)
    .debounceTime(1000)
    .do(action => saveUplimit(action.payload))
    .do(scrollToTop)
    .map(uplimitChange)
