import styled from 'styled-components'
import { background, CenteredItem } from '../../_styled/grid'
export const QuestionContainer = styled(CenteredItem)`
  width: 100%;
  grid-area: ws_question;
`

export const QuestionBase = `
  color: #132333;
  letter-spacing: 0.1em;   
`

export const QuestionActive = styled.span`
  margin: 7px;
  box-shadow: 
  0.3vh 0.3vh 0.1vh 0.1vh #2c6c96,
  -0.3vh 0.3vh 0.1vh 0.1vh #2c6c96;
  padding: 0.5vh;
`

export const QuestionVisible = styled.span`
  margin: 7px;
  padding: 0.5vh;
  box-shadow: -0.3vh -0.3vh 0.8vh 0.5vh ${background};
  visibility: visible;
`

export const QuestionHidden = styled(QuestionVisible)`
  margin: 7px;
  visibility: hidden;
`
