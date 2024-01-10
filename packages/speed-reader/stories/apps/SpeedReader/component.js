import {
  initialGetLocalize,
  initialGetLocalizeUrl,
  setLocalize,
} from 'client-helpers-fn'
import { defaultTo, delay, last, maybe, range, toDecimal } from 'rambdax'
import { range as rangeModule } from 'rambdax'
import React from 'react'
import { takeArguments } from 'string-fn'
import styled from 'styled-components'

import { Cell, Grid } from '../../src/Grid/component'
import { Options } from '../../src/Options/component'
import { getData } from './getData'
import { getReloadIndexes } from './getReloadIndexes'
import { produceRow } from './produceRow'

const BACKGROUND = (isDarkMode) => isDarkMode ? '#111' : '#ede8e1aa'

const Div =  styled.div(props => {
  return {
    'z-index': "1000",
  'font-size': "6vh",
  color: props.isDarkMode? "#e7e7e7": "#30322ef1",
  'margin-top': "auto",
  'margin-bottom': "auto"
  }
})

const MarkedDivLeft = styled(Div)`
  color: #f7f2f2;
  padding-left: 10%;
  min-height: 7.2vh;
  background: #977d96e9;
  width: 100%;
`
const MarkedDivRight = styled(MarkedDivLeft)`
  color: #f7f2f2;
  padding-left: 0%;
  background: #977d96e9;
  width: 100%;
`

function defineDelay(word, base){
  const longDelay = word.length > 12
  const mediumDelay = word.length > 7
  if (longDelay) return Math.floor(260 * base)
  if (mediumDelay) return Math.floor(220 * base)

  return Math.floor(170 * base)
}

const bookIndexOption = {
  label        : 'book.index',
  type         : 'SELECT',
  visibleLabel : 'Book index',
  choices      : rangeModule(0, 60).map(String),
  value        : initialGetLocalizeUrl({
    key          : 'book.index',
    urlKey       : 'i',
    defaultValue : '1',
  }),
}
const password = initialGetLocalizeUrl({
  key          : 'password',
  urlKey       : 'password',
  defaultValue : '',
})
const forceReloadOption = {
  label        : 'force.reload',
  type         : 'TOGGLE',
  visibleLabel : 'Force reload on every 1% progress',
  value        : initialGetLocalize({
    key          : 'force.reload',
    defaultValue : false,
  }),
}
const progressOption = {
  visibleLabel : 'Progress',
  label        : 'speed.reader.progress',
  type         : 'SLIDER',
  between      : [ 0, 100 ],
  value        : initialGetLocalizeUrl({
    key          : 'speed.reader.progress',
    urlKey       : 'progress',
    defaultValue : 0,
  }),
}
const speedOption = {
  visibleLabel : 'Speed',
  label        : 'speed.reader.speed',
  type         : 'SLIDER',
  between      : [ 200, 1000 ],
  value        : initialGetLocalizeUrl({
    key          : 'speed.reader.speed',
    urlKey       : 'speed',
    defaultValue : '350',
  }),
}
const alternativeOption = {
  visibleLabel : 'alternative',
  label        : 'speed.reader.alternative',
  type         : 'TOGGLE',
  value        : initialGetLocalizeUrl({
    key          : 'speed.reader.alternative',
    urlKey       : 'alt',
    defaultValue : false,
  }),
}
const isDarkModeOption = {
  visibleLabel : 'Dark mode',
  label        : 'speed.reader.dark.mode',
  type         : 'TOGGLE',
  value        : initialGetLocalizeUrl({
    key          : 'speed.reader.dark.mode',
    urlKey       : 'dark',
    defaultValue : true,
  }),
}
const isLoopOption = {
  visibleLabel : 'Loop mode',
  label        : 'speed.reader.loop.mode',
  type         : 'TOGGLE',
  value        : initialGetLocalize({
    key          : 'speed.reader.loop.mode',
    defaultValue : false,
  }),
}
function calculateActualSpeed(input){
  return toDecimal(input / 500, 1)
}

const isFocused = x => [ 10, 11 ].includes(x)

export class SpeedReader extends React.Component{
  constructor(props){
    super(props)
    this.SPEED = calculateActualSpeed(speedOption.value)
    this.OPTIONS = [
      bookIndexOption,
      progressOption,
      speedOption,
      forceReloadOption,
      alternativeOption,
      isDarkModeOption,
      isLoopOption
    ]
    this.state = {
      show : true,
      word : defaultTo('', props.testString),
    }
    this.work = this.work.bind(this)
    this.handleOptionsCallback = this.handleOptionsCallback.bind(this)
  }

  async work(data){
    const len = data.length
    const reloadIndexes = getReloadIndexes(len)
    const initialCounter =
      progressOption.value === 0 ? -1 : reloadIndexes[ progressOption.value ]

    const counter = initialCounter ? initialCounter : last(reloadIndexes)

    for (const i of range(counter + 1, len)){
      if (reloadIndexes.includes(i)){
        if(isLoopOption.value) return window.location.reload()
        const percentage = reloadIndexes.indexOf(i) + 1
        setLocalize(progressOption.label, percentage)

        if (forceReloadOption.value){
          return window.location.reload()
        }
      }

      if (this.state.show){
        this.setState({ word : data[ i ] })
      }
      await delay(defineDelay(data[ i ], this.SPEED))
    }

    setLocalize(progressOption.label, 0)
    await delay(2000)
    window.location.reload()
  }

  handleOptionsCallback({ type }){
    if (type === 'UPDATE_ACTIVE'){
      return this.setState({ show : false })
    }
    if (type !== 'UPDATE_OPTIONS') return
    delay(500).then(() => window.location.reload())
  }

  componentDidMount(){
    if (this.props.testString) return
    getData(bookIndexOption.value, password).then(data => this.work(data))
  }

  render(){
    const row = produceRow(this.state.word)

    const Row = row.split``.map((char, i) => {
      const focused = isFocused(i)
      if (!focused && (!char || !this.state.show)) return

      const El = maybe(
        i === 10 && !alternativeOption.value,
        MarkedDivLeft,
        i === 11 ? MarkedDivRight : Div
      )

      return (
        <Cell
          evalStyled="display:flex;"
          height={10}
          key={`speed-reader-row-${ i }`}
          topLeft={{
            x : 3 + i,
            y : 10,
          }}
          width={1}
        >
          <El isDarkMode={isDarkModeOption.value}>{char}</El>
        </Cell>
      )
    })

    return (
      <Grid background={BACKGROUND(isDarkModeOption.value)}>
        <Options
          callback={this.handleOptionsCallback}
          keyBinding={this.props.optionsKeyBinding}
          label="speed.reader"
          options={this.OPTIONS}
        />
        <Cell
          evalStyled="background: ${BACKGROUND}"
          height={24}
          topLeft={{
            x : 2,
            y : 4,
          }}
          width={28}
        />
        {this.state.show ? Row : null}
      </Grid>
    )
  }
}
