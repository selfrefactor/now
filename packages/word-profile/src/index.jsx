import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { WordProfileComplete } from '../../../../stories/src/index'
import { sentryAnt } from './ants/sentry.js'
sentryAnt()

function Root(){

  return (
    <WordProfileComplete />
  )
}

render(<Root />, document.getElementById('root'))
