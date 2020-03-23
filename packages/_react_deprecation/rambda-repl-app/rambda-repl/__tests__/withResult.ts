import { attachResultVariable, rambdaREPL } from '../src/index'
import {readFileSync} from 'fs'

const WITH_RESULT = readFileSync(`${__dirname}/result.txt`).toString()
test('when result variable', () => {
  const result = rambdaREPL(WITH_RESULT)
  const expected = "https://rambda.now.sh?const%20mapWithIndex%20%3D%20R.addIndex(R.map)%0Aconst%20result%20%3D%20mapWithIndex(%0A%20%20(val%2C%20index)%20%3D%3E%20%60%24%7Bval%7D%20-%20%24%7Bindex%7D%60%2C%0A%20%20%5B'A'%2C%20'B'%2C%20'C'%5D%0A)%20%2F%2F%20%3D%3E%20%5B'A%20-%200'%2C%20'B%20-%201'%2C%20'C%20-%202'%5D"

  expect(
    result,
  ).toEqual(expected)
})
