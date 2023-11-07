import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { frHeight, Text } from './grid'

export const RelatedContainer = styled(CenteredItem)`
  height: ${2 * frHeight}vh;
  grid-area: gw_related;
  outline: dashed #bf616a;
`

export const Related = styled(Text)`
  text-align:center;
  font-weight: 600;
  color: #5a245f;
`
