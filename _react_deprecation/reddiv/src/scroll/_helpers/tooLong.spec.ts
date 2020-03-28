import { tooLong } from './tooLong'

test('false', () =>{
  expect(
    tooLong({width: 200, height: 400})
    ).toBeFalsy()
  })
  
  test('true', () =>{
    expect(
      tooLong({width: 200, height: 600})
  ).toBeTruthy()
})