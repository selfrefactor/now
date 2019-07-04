import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { CODE_CHANGE, SET_CODE } from '../../constants'

export const codeChangeEpic = (
  action$: ActionsObservable<CodeChangeAction>,
  store,
): Observable<Action> =>
  action$
    .ofType(CODE_CHANGE)
    .map(action => ({ type: SET_CODE, payload: action.payload }))