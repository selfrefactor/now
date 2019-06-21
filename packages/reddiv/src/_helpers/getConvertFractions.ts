export function getConvertFractions(
  xNumColumns: number, 
  xHeight: number
) {
  return (fractions: number) => {
    const singleFraction = xHeight / xNumColumns

    return singleFraction * fractions
  }
}
