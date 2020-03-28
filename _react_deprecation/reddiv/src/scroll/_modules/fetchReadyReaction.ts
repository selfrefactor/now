import { flatten } from 'rambdax'
import { parseData } from './parseData'
import { uniqByTitle } from './uniqByTitle'

export function fetchReadyReaction(
  state: ScrollStore,
  payload: any,
): DBInstance[] {
  const flat = flatten<DBInstance>(
    [state.db, parseData(payload)],
  )

  const uniq = uniqByTitle(flat)

  return uniq.filter(
    (dbInstance: DBInstance) => dbInstance.ups >= state.upLimit,
  )
}
