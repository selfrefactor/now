import { rambdaREPL } from './'

void function debug() {
  const result = rambdaREPL('foo')
  console.log(result)
}()
