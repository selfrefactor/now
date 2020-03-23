import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { sentryAnt } from './ants/sentry.js'
import { RandomWordComplete } from '../stories/apps/RandomWord/complete.js'
sentryAnt()

function Root(){
  return <RandomWordComplete />
}

render(<Root />, document.getElementById('root'))
