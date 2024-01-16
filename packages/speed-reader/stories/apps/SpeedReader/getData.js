import { API_URL } from '../../constants'
import { post } from 'axios'

function parseResponse (response){
  return JSON.parse(response.message).data
}


export async function getData(bookIndex, password){
  const { data } = await post(`${ API_URL(bookIndex) }`, { password })
  if(!data) throw new Error('No data')
  return parseResponse(data).filter(x => x.trim().length > 0)
}
