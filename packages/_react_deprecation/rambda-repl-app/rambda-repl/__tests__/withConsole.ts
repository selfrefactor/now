import { rambdaREPL } from '../src/index'

test('when console.log', () => {
  const WITH_CONSOLE = `let counter = 0
const inc = () => {
  counter++
}
const fn = debounce(inc, 1000)
fn()
await R.delay(500)
console.log(counter) //=> 0
await R.delay(1000)
console.log(counter) //=> 1`
  const result = rambdaREPL(WITH_CONSOLE)
  const expected = '0'


  expect(
    result,
  ).not.toEqual(expected)
})
