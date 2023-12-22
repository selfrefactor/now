import { post } from 'axios'

import { API_URL } from '../../constants'

export async function wordProfileDataAnt(word, password){
  if (!password) return
  const { data } = await post(`${ API_URL }/lambdas/word-profile`, {
    word,
    password,
  })

  return data
}
