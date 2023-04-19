import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const QuestionContainer = styled(CenteredItem)`
  grid-area: question;
`

export const Question = styled(Text)`
  color: #1d2429;
  letter-spacing: 0.1em; 
`
