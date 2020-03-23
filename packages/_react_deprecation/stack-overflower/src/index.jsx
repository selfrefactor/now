import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { sentryAnt } from './ants/sentry.js'
import { StackOverflowerComplete } from '../stories/apps/StackOverflower/complete.js'
sentryAnt()

function Root(){
  return <StackOverflowerComplete />
}

render(<Root />, document.getElementById('root'))
