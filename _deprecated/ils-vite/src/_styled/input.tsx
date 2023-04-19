import styled from 'styled-components'
import { height } from './grid'

export const InputBase = styled.div`
  padding-top: ${0.1 * height}vh;
  
  input {
    caret-color: #729d39;
    height: ${0.7 * height}vh;
    font-size: ${0.6 * height}vh;
    text-align: center;
    width: auto;
    box-shadow: 3px 3px 1px #69779b;
  }
`
