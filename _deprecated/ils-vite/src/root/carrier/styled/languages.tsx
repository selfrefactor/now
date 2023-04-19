import styled from 'styled-components'
const height = 5
const containerHeight = -7.5 * height

/**
 * Hangs onto its parrent to draw a grid used by `Languages`
 */
export const LanguagesContainer = styled.div`
  position: relative;
  top: ${containerHeight}vh;
  z-index: 9999;
  background: #e7e7e7;
  left: 0;
  width: 15vw;

  div.active_language {
    background: #283593;
    color: #e7e7e7;
    :hover{
      color: #283593;
    }
  }
  div.inactive_language:hover {
    color: #038387;
  }
`

/**
 * Where every language pair is rendered
 */
export const Languages = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr;
  text-align: center;

  div {
    cursor: pointer;
    color: #283593;
    height: ${height}vh;
    line-height: ${height}vh;
    font-size: ${height * 0.8}vh;
    outline: 1px solid #2c6c96;
  }
`
