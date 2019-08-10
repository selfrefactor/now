import { getJsonAnt } from '../ants/getJson'
import { buildUrlAnt } from '../ants/buildUrl'
import { setDbBee } from './setDb'

export async function updateDbBee(subreddit, marker){
  const { data } = await getJsonAnt(
    buildUrlAnt(subreddit, marker)
  )

  return {
    db     : setDbBee(data.children),
    marker : data.after,
  }
}
