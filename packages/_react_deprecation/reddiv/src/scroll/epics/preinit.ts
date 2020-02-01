import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { PREINIT } from '../../constants'
import { init } from '../../root/actions'

export const preinitEpic = (
  action$: ActionsObservable<PreinitAction>,
): Observable<any> =>

  action$
    .ofType(PREINIT)
    .map(init)
