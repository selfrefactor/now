import styled from 'styled-components'
import { frHeight } from './grid'
/**
 * Because row `sa_word` is 10fr
 */
const height = frHeight * 10

/**
 * 7 instead of 6 because of margin
 */
const cellHeight = height / 7

export const SelectContainer = styled.ul`
  display:inline-block;
  height: ${height}vh;
  list-style-type: none;
  margin: 0 10px;
  min-width: 7vw;
  li{
    color: #4d0e0b;
  }
  li.selectable_correct{
    color: #f9f6f1;
    background: #60a917;
  }
  li.selectable_wrong{
    color: #f9f6f1;
    background: #c8102e;    
  }
  li.selectable_inactive{
    color: #f9f6f1;
    background: #1fafff;    
  }
`

export const Span = styled.span`
  color: #3e4251;
`

export const Select = styled.li`
  background: #f7f4f4;
  cursor: pointer;
  height: ${cellHeight}vh;
  line-height: ${cellHeight}vh;
  font-size: ${cellHeight / 2}vh;
  margin-top: ${frHeight * 0.07}vh;
  outline: double #034694;
  text-align: center;
  transition: background 0.12s ease-in;

  &:hover{
    background: '#aacfcd';
  }
`
