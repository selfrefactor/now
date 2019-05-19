import {dispatcher} from 'reduxed'

export function handleNext(){
  dispatcher({type:'ANY'})
}