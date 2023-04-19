import { range } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import {
  isFirefox,
  isChrome,
  LANGUAGE_CHANGE_INIT,
  NAVIGATION_TOGGLE,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
} from '../../constants'
import { notifyError } from '../actions';

function getActionFromID(id: string, name: string): false | Action {
  switch (id) {
    case 'icon_changelanguage':
      return { type: LANGUAGE_CHANGE_INIT }
    case 'toggle-navigation':
      return { type: NAVIGATION_TOGGLE }
    case 'icon_next':
      return { type: `${name}@NEXT` }
    case 'icon_submit':
      return { type: `${name}@CHECK` }
    case 'icon_random':
      return { type: SETTINGS_RANDOM }
    case 'icon_texttospeech':
      return { type: SETTINGS_TEXT_TO_SPEECH }
    default:
      return false
  }
}

const MIN = 2

function getID(click: any) {
  let willReturn = ''
  for (const i of range(0, MIN + 1)) {
    if (click.path[i].id) {
      willReturn = click.path[i].id
    }
  }

  return willReturn
}

function getActionToEmit(clickEvent, name){
  if(isChrome){
    const isCanvas = clickEvent.srcElement.nodeName === 'CANVAS'
    const ok = clickEvent.path.length >= MIN || isCanvas
  
    const id = ok ?
      getID(clickEvent) :
      ''
  
    return getActionFromID(id, name)
  }
  
  return getActionFromID(clickEvent.target.id, name)
}

/**
 * It listens for any click events.
 * If there is event handler, action is emitted.
 */
export const clickEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
): Observable<any> =>

  Observable
    .fromEvent(document, 'click')
    .switchMap((clickEvent: any) =>
    new Observable(observer => {
      const { name } = store.getState().store

      try {
          const actionToEmit = getActionToEmit(clickEvent, name)
          if (actionToEmit === false) return observer.complete()
  
          observer.next(actionToEmit)
          observer.complete()
        } catch (e) {
          observer.next(notifyError({
            message: 'Navigation error',
            ms: 5000,
          }))
          observer.complete()
        }
      }),
  )
