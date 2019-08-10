import { getJsonAnt } from '../ants/getJson'
import { buildUrlAnt } from '../ants/buildUrl'
import { dispatcher } from '../reduxed/src/index'
import { setDb } from '../actions'
import { setDbBee } from './setDb'

export async function updateDbBee(subreddit, marker){
  const { data } = await getJsonAnt(
    buildUrlAnt(subreddit, marker)
  )
  // dispatcher(
  //   setDb({
  //     db     : setDbBee(data.children),
  //     marker : data.after,
  //   })
  // )
}
