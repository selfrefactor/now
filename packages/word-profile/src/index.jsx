import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { WordProfileComplete } from '../stories/apps/WordProfile/complete.js'

function Root(){

  return (
    <WordProfileComplete />
  )
}

render(<Root />, document.getElementById('root'))
