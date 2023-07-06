const {Stringify} = require('./stringify')

// test('happy', () => {
//   expect(Stringify(1)).toEqual('1')
// })

test('fn', () => {
  let input = {
    a: 1,
    b: () => {},
  }
  let result = Stringify(input)
  console.log(result )
})
