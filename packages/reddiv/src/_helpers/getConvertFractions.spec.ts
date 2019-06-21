import {getConvertFractions} from './getConvertFractions'

test('', ()=> {
  const fn = getConvertFractions(7, 1280)
  expect(
    Math.round(fn(3))
  ).toBe(549)
})