import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { sentryAnt } from './ants/sentry.js'
import { RedditViewer } from '../stories/apps/RedditViewer/component'
sentryAnt()

function Root(){
  return <RedditViewer />
}

render(<Root />, document.getElementById('root'))
