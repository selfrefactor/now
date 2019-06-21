import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { sentryAnt } from './ants/sentry.js'
import { SpeedReader } from '../../../../stories/src/SpeedReader/component.js'
sentryAnt()

function Root(){
  <SpeedReader />
}

render(<Root />, document.getElementById('root'))
