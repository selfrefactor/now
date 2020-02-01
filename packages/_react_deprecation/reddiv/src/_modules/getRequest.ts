import axios from 'axios'
import { Observable } from 'rxjs/Observable'
type GetRequest = (url: string) => Promise<any>

const get: GetRequest = async url => {
  const result = await axios.get(url)

  return result
}

export const getRequest = url => Observable.fromPromise(get(url))
