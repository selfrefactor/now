import {
  INIT_READY,
  LEARNING_MEME_INIT,
} from '../../constants'

// import { ActionsObservable } from 'redux-observable'
import { Observable, combineLatest } from 'rxjs'
import { initReady } from '../actions'
import { createDatabaseBee } from '../../bees/createDatabase';

export const initEpic = (
  action$: any,
  // action$: ActionsObservable<LearningMemeInitAction>,
  store,
): Observable<any> => {
  const db$ = action$.ofType(INIT_READY)
  const init$ = action$.ofType(LEARNING_MEME_INIT)
  return new Observable((xx) => {
        
  })
  // return combineLatest(db$, init$)
  // .subscribe(
  //   (x) => {
  //     return new Observable((xx) => {
        
  //     })
  //   }
  // )
    // .map(() => initReady(createDatabaseBee(store)))
}
