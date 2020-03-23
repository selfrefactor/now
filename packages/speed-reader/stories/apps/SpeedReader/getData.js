import { API_URL } from '../../constants'
import { post } from 'axios'

export async function getData(bookIndex){
  const { data } = await post(`${ API_URL }/speed-reader/`, { id : bookIndex })

  return data.filter(x => x.trim().length > 0)
}
