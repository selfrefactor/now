import { rambdaREPL, attachResultVariable } from '../src/index'

const NO_CONSOLE_NO_RESULT = `R.assocPath('a.b.c', 42, {a: {b: {c: 0}}})
//=> {a: {b: {c: 42} } }`

test('',()=>{
  const result = attachResultVariable(NO_CONSOLE_NO_RESULT)
  
  const expected = `const result = R.assocPath('a.b.c', 42, {a: {b: {c: 0}}})
//=> {a: {b: {c: 42} } }`
  
  expect(
    result
  ).toEqual(expected)
})

test('when no console.log and no result variable', () => {
  const result = rambdaREPL(NO_CONSOLE_NO_RESULT)
  const expected = "https://rambda.now.sh?const%20result%20%3D%20R.assocPath('a.b.c'%2C%2042%2C%20%7Ba%3A%20%7Bb%3A%20%7Bc%3A%200%7D%7D%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%20%7Bb%3A%20%7Bc%3A%2042%7D%20%7D%20%7D"


  expect(
    result,
  ).toEqual(expected)
})
