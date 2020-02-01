import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { WordProfileComplete } from '../stories/apps/WordProfile/complete.js'
import { sentryAnt } from './ants/sentry.js'
sentryAnt()

function Root(){

  return (
    <WordProfileComplete />
  )
}

render(<Root />, document.getElementById('root'))
