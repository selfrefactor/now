const { type } = require('rambdax')

function Stringify(input){
  const typeInput= type(input)
  if(typeInput === 'Array'){
    return `[${input.map(x => Stringify(x)).join(', ')}]`
  }
  if(typeInput === null) return `null`
  if(input === undefined) return `undefined`
  if(typeInput !== 'Object') return String(input)

  return map(Stringify, input)
}

exports.Stringify = Stringify
