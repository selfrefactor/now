import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { toggleNavigation } from '../actions'

/**
 * Defines time between two clicks
 */
const DEBOUNCE = 1000

export const clickEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
): Observable<Action> =>

  Observable.fromEvent(document, 'click')
    .bufferTime(DEBOUNCE)
    .map(list => list.length)
    .filter(x => x === 2)
    .map(toggleNavigation)
