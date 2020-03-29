import { getter } from 'client-helpers-fn'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { INIT } from './../../constants'
import { initReady } from './../actions'
import { partition } from 'rambdax'
import {db} from './db'

function rehydrate({rows}){
  const toReturn = []
  const randomIndex = getter('randomIndex')

  rows.forEach(({doc}) => {
    if (!doc.imageSrc){
      if(doc.deWord) {
        doc.imageSrc = 'https://source.unsplash.com/random/1000x750'
      }else{
        return
      }
    }

    toReturn.push({doc})
  })

  if(randomIndex === undefined) return {rows: toReturn}

  const [firstPart, secondPart] = partition(
    (_, i) =>  i < randomIndex,
    toReturn
  )

  return {rows: [...(secondPart as any), ...(firstPart as any)]}
}

export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
  { getJson },
): Observable<any> =>
  action$
    .ofType(INIT)
    .switchMap(() => new Observable(observer => {
      observer.next(
        initReady({
          received: rehydrate(db),
        }),
      )
      observer.complete()
    }))
