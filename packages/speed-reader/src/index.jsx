import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { sentryAnt } from './ants/sentry.js'
import { SpeedReaderComplete } from '../stories/apps/SpeedReader/complete.js'
sentryAnt()

function Root(){
  return <SpeedReaderComplete production={true} />
}

render(<Root />, document.getElementById('root'))
