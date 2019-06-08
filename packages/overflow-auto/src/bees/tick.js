import { dispatcher, pipe } from 'reduxed'
import { delay } from 'rambdax'

export async function tickBee(
  tick,
  data,
  tag,
  auto
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

  if(auto!== true) return console.log('no auto mode. exit')

  await delay(tick * 60000)

  while (true){
    dispatcher(nextAction)

    await delay(tick * 60000)
  }
}
