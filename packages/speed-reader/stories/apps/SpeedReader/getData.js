import { API_URL } from '../../constants'
import { post } from 'axios'

export async function getData(bookIndex, password){
  const { data } = await post(`${ API_URL }/speed-reader/`, { id : bookIndex, password })

  return data.filter(x => x.trim().length > 0)
}
