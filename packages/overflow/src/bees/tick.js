import {dispatcher} from 'reduxed'
import { delay } from 'rambdax'

const TICK = 10000

export async function tickBee(getCurrentState, tick = TICK){
  while(true){
    if(getCurrentState().play){
      dispatcher({type:'NEXT'})
    }
    
    await delay(tick)
  }
}