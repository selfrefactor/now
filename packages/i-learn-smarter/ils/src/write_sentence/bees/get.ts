import styled from 'styled-components'
import { defaultToStrict } from 'rambdax'
import {AnswerBase} from '../styled/answer'
import {QuestionBase} from '../styled/question'
import { getText } from '../styled/grid'
import { getter } from 'client-helpers-fn';
const RATE = 4
const LENGTH_STANDARD = 102
const WIN_SIZE_STANDARD = 2700

function divide(x,y){
  return Number(Number.parseFloat(
    `${x / y }`
  ).toFixed(2))
}

function getRate(len){
  const windowSize = getter('window')
  const windowSizeStandard = defaultToStrict(
    WIN_SIZE_STANDARD,
    windowSize
  )
  const windowRate = divide(
    (window as any).visualViewport.width, 
    windowSizeStandard
  )
  const lengthRate = divide(len, LENGTH_STANDARD)
  
  return divide(
    divide(windowRate, lengthRate),
    RATE,
  )
}

export function getBee(currentInstance) {
  const rate = getRate(currentInstance.fromPart.length)
  const Question = styled(getText(
    rate  
  ))`${QuestionBase}`
  const Answer = styled(getText(
    rate
  ))`${AnswerBase}`  
  const Translation = styled(getText(
    getRate(currentInstance.toPart.length)*1.1
  ))`color: #1c2c5b;`
  
  return {
    Question,
    Answer,
    Translation,
  }
}
