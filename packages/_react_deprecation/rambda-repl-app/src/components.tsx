import styled from 'styled-components'

export const HalfContainer = styled.div`
height: 100vh;
width: 49vw;
`

export const AceContainer = styled.div`
height: 100vh;
width: 49vw;
background: #3a3939;
`

export const AceCell = styled.div`
height: 100vh;
width: 47vw;
margin-left: 2vw;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

export const ResultsGrid = styled.div`
height: 100vh;
grid-template-columns: 1fr 1fr 10fr;
grid-template-rows: 1fr 1fr;
grid-template-areas: ". . x" ". . y";
display: grid;
`

export const Label = styled.div`
text-decoration: underline;
font-size: 0.8rem;
color: #8E0C24;
`

export const Result = styled.div`
font-size: 0.63rem;
line-height: 1.07;
grid-area: x;
border-bottom: 1px solid teal;
`

export const Log = styled.div`
font-size: 0.63rem;
line-height: 1.07;
grid-area: y;
`

export const Pre = styled.pre`
border-bottom: 1px solid teal;
padding: 4px;
`