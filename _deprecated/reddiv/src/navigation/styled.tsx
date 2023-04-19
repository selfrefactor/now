import styled from 'styled-components'
import { getConvertFractions } from '../_helpers/getConvertFractions'

const numRows = 7
const height = 12

const convertFractions = getConvertFractions(numRows, height)

/**
 * Container holding Grid
 */
export const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  height: ${height}vh;
  width: 100%;
  background-color: #fafafa;
  z-index: 1000;
`

/**
 * Grid holding *Container
 */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". left right ."; 
`

export const RangeContainer = styled.div`
  grid-area: left;
  padding-top: 2vh;
`

export const Range = styled.input.attrs({
  type: 'range',
})`
  cursor: pointer;
  margin-top: ${convertFractions(1.5)}vh;
  width: 100%;
`

export const UplimitContainer = styled.div`
  grid-area: right;
  text-align:center
`

export const Uplimit = styled.div`
  margin: ${convertFractions(1.1)}vmin;
  color: blue;
  font-size: ${convertFractions(3)}vh;
`
