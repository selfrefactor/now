import { setter } from 'client-helpers-fn'
import { random } from 'rambdax'

export function settingsRandom(action: Action, state: Store): Store {
  const randomIndex = random(
    0,
    state.db.length - 1
  )

  setter('randomIndex', randomIndex)
  window.location.reload(false)
  
  return state
}
