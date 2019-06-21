import { defaultTo } from 'rambdax'
import { takeArguments } from 'string-fn'
import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import { sentryAnt } from './ants/sentry.js'
import { SpeedReader } from '../../../../stories/src/SpeedReader/component.js'
sentryAnt()

const {index, base, progress } = takeArguments(window.location.href)
const bookIndex = defaultTo(0,index)
const baseRate = defaultTo(1,base)
const progressIndex = defaultTo(0,progress)

function Root(){
  return <SpeedReader 
    bookIndex={bookIndex}
    baseRate={baseRate}
    progressIndex={progressIndex}
  />
}

render(<Root />, document.getElementById('root'))
