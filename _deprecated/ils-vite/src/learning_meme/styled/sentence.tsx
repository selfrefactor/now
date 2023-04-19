import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const SentenceContainer = styled(CenteredItem)`
  grid-area: sentence;
`

export const Sentence = styled(Text)`
  color: #0e2236cc;
  padding-top: 0px;
`
