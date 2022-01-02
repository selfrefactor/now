const { type } = require('rambdax')

function Stringify(input){
  const typeInput= type(input)
  console.warn(`typeInput`, typeInput)
  if(typeInput === 'Array'){
    return `[${input.map(x => Stringify(x)).join(', ')}]`
  }
  if(typeInput === null) return `null`
  if(input === undefined) return `undefined`
  if(typeInput !== 'Object') return String(input)

  return JSON.stringify(input, null, 2)
}

exports.Stringify = Stringify
