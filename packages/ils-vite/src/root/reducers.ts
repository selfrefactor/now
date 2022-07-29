import {
  INIT_READY,
  LANGUAGE_CHANGE_CLICK,
  LANGUAGE_CHANGE_INIT,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
  SHARED_ADD_POINTS_READY,
  SHARED_INIT,
  NAVIGATION_TOGGLE,
  ROUTER_CHANGE,
} from '../constants'

import { getInitialState } from '../_helpers/getInitialState'
import { normalizeDatabaseBee } from './bees/normalizeDatabase'

import { languageChangeClick } from './side_effects/languageChangeClick'
import { settingsRandom } from './side_effects/settingsRandom'
import { settingsTextToSpeech } from './side_effects/settingsTextToSpeech'

export function store(
  state: Store = getInitialState(),
  action: Action,
): Store {

  switch (action.type) {
    case INIT_READY:
      return {
        ...state,
        db: normalizeDatabaseBee(action.payload.received.rows),
        ready: true,
      }
    case NAVIGATION_TOGGLE:
      return {
        ...state,
        navigationActive: !state.navigationActive,
      }
    case ROUTER_CHANGE:
      return {
        ...state,
        navigationActive: false,
      }  
    case LANGUAGE_CHANGE_INIT:
      return {
        ...state,
        toggleLanguage: !state.toggleLanguage,
      }
    case LANGUAGE_CHANGE_CLICK:
      return languageChangeClick(action, state)
    case SETTINGS_RANDOM:
      return settingsRandom(action, state)
    case SETTINGS_TEXT_TO_SPEECH:
      return settingsTextToSpeech(action, state)
    case SHARED_ADD_POINTS_READY:
      return {
        ...state,
        points: action.payload,
      }
    case SHARED_INIT:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}
