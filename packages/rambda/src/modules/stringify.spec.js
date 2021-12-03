const {Stringify} = require('./stringify')

test('happy', () => {
  expect(Stringify(1)).toEqual('1')
})
