import { dispatcher, pipe } from '../../../../../reduxed/src/index'

export async function tickBee(getCurrentState, tick, tag, data){
  const nextAction = {
    type    : 'NEXT',
    payload : tag,
  }

  pipe(
    {
      type    : 'SET_DATA',
      payload : data,
    },
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
