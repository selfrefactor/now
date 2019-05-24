import { dispatcher, pipe } from 'reduxed'
import { delay } from 'rambdax'

export async function tickBee(
  getCurrentState,
  tick,
  data,
  tag,
){
  const nextAction = { type : 'NEXT' }
  const setDataAction = {
    type    : 'SET_DATA',
    payload : {
      data,
      tag,
    },
  }

  pipe(
    setDataAction,
    nextAction
  )

  await delay(tick * 60000)

  while (true){
    if (getCurrentState().play){
      dispatcher(nextAction)
    }

    await delay(tick * 60000)
  }
}
