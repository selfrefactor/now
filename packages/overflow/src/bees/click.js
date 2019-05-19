import {dispatcher} from 'reduxed'

export function clickBee(){
  dispatcher({type:'CLICK'})
}