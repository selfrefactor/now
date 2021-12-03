const { type, map } = require('rambdax')

function Stringify(input){
  const typeInput= type(input)
  if(typeInput === 'Array'){
    return `[${input.map(x => Stringify(x)).join(', ')}]`
  }
  if(typeInput === null) return `null`
  if(input === undefined) return `undefined`
  if(typeInput !== 'Object') return String(input)
  const obj= map(x => Stringify(x), input)
  return JSON.stringify(obj, null, 2)
}

exports.Stringify = Stringify
