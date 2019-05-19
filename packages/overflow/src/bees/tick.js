import {dispatcher} from 'reduxed'
import { delay } from 'rambdax'

export async function tickBee(getCurrentState, tick, tag){
  while(true){
    if(getCurrentState().play){
      dispatcher({type:'NEXT', payload: tag})
    }
    
    await delay(tick * 60000)
  }
}
