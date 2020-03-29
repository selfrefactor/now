import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'
export const TranslationContainer = styled(CenteredItem)`
  grid-area: ws_translation;
  width: 100%;            
`
export const Translation =  styled(Text)`
  color: #1c2c5b;
  `
  
  export const TranslationSmall = styled(getText(0.37))`
  color: #1c2c5b;
`
