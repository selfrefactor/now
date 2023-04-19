import { getter } from 'client-helpers-fn'
import { delay } from 'rambdax'
import { click } from './click'
import { normalizeLanguageAnt } from '../../ants/normalizeLanguage'
import { solved } from './solved'

const BUFFER = 700
const BETWEEN_QUESTIONS_PAUSE = 1500

async function detect(event) {
  const spoken = event.results[0][0].transcript
  const input = document.getElementsByTagName('input')
  if (solved()) return

  input[0].value = spoken
  click('submit')

  await delay(BETWEEN_QUESTIONS_PAUSE)
  click('next')
}

export function acceptSpeech(){
  const fromLanguage = getter<Language>('fromLanguage')
  const recognition = new webkitSpeechRecognition()

  const restart = e => {
    if (e.error) console.warn('ACCEPT_SPEECH')

    recognition.stop()
    delay(BUFFER).then(() => recognition.start())
  }

  recognition.lang = normalizeLanguageAnt(fromLanguage)
  recognition.interimResults = false
  recognition.continious = true
  recognition.maxAlternatives = 1

  recognition.onerror = restart
  recognition.onresult = detect
  recognition.onspeechend = restart

  recognition.start()
}
