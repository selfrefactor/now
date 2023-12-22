import { post } from 'axios'

import { API_URL } from '../../constants'

export async function wordProfileListAnt(password){
  const { data } = await post(`${ API_URL }/lambdas/word-profile/all-words`, { password })

  return data
}
