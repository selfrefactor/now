import { getterAnt  } from 'client-helpers-fn'
import { defaultState } from '../constants'
const DARK_BLUE_3 = '#20366b'
const {
  textToSpeechFlag,
  points,
  fromLanguage,
  toLanguage,
} = getterAnt(defaultState)

const changeLanguage = {
  roughness: 0.6,
  fill: DARK_BLUE_3,
  fillWeight: 2,
}

const roughData: RoughData = {
  changeLanguage,
  next: { roughness: 1, fill: DARK_BLUE_3 },
  random: { roughness: 0.2, active: false },
  submit: { roughness: 0.5, fill: DARK_BLUE_3 },
  textToSpeech: { roughness: 0.1, active: textToSpeechFlag, fillWeight: 1 },
}

export function getInitialState(): Store {

  return {
    fromLanguage,
    instructions: '',
    logged: false,
    name: '',
    navigationActive: false,
    points,
    ready: false,
    roughData,
    textToSpeechFlag,
    toLanguage,
    toggleLanguage: false,
  }
}
