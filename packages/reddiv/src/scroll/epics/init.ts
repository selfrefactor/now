import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { INIT, SCROLL_INIT } from '../../constants'
import { initReady } from '../actions'

export const initEpic = (
  action$: ActionsObservable<ScrollInitAction>,
  store,
): Observable<any> =>

  Observable
    .combineLatest(
      action$.ofType(INIT),
      action$.ofType(SCROLL_INIT),
    )
    .map(initReady)
