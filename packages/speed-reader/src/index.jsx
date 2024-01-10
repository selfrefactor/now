import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { SpeedReaderComplete } from '../stories/apps/SpeedReader/complete.js'

function Root(){
  return <SpeedReaderComplete />
}

render(<Root />, document.getElementById('root'))
