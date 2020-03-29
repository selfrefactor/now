import {
  ICON_ACTIVE,
  ICON_PASSIVE,
  LANGUAGE_SEPARATOR,
} from '../../constants'
import { changeLanguagePath } from './icons/changeLanguage'
import { nextPath } from './icons/next'
import { randomPath } from './icons/random'
import { submitPath } from './icons/submit'
import { textToSpeechPath } from './icons/textToSpeech'

import {
  Container,
  createIconCell,
  Points,
} from './styled/grid'
const Random = createIconCell('random')
const ChangeLanguage = createIconCell('changelanguage', false)
const Submit = createIconCell('submit')
const Next = createIconCell('next')
const TextToSpeech = createIconCell('texttospeech')

import { defaultTo, identity, ifElse, isNil } from 'rambdax'
import * as React from 'react'
import { connect } from 'react-redux'
import rough from 'roughjs'
import { LanguagesComponent } from './languages'

const Paths = {
  changeLanguagePath,
  nextPath,
  randomPath,
  submitPath,
  textToSpeechPath,
}

export class Carrier extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.paint = this.paint.bind(this)
    this.singlePaint = this.singlePaint.bind(this)
  }
  public singlePaint(namespace: string, reverseFlag?: boolean) {
    const x = this.props.store.roughData[namespace]
    const domElement = document.getElementById(
      `icon_${namespace.toLowerCase()}`,
    )

    if (domElement === null) return

    const canvasElement = (rough as any).canvas(domElement)

    /**
     * Ugly as this is invoked from shouldComponentUpdate_
     * and therefore the new props are not yet applied
     */
    if (reverseFlag) x.active = !x.active

    const roughness = defaultTo(
      0.7,
      x.roughness,
    )
    const fillWeight = defaultTo(
      1,
      x.fillWeight,
    ) 

    const fill = ifElse(
      isNil,
      () => x.active ? ICON_ACTIVE : ICON_PASSIVE,
      identity,
    )(x.fill)

    const path = Paths[`${namespace}Path`]
    const stroke = '#0e2236'

    canvasElement.path(
      path,
      { roughness, fill, fillWeight, stroke },
    )
  }
  public paint() {
    Object.keys(this.props.store.roughData)
      .map(
        namespace => this.singlePaint(namespace),
    )
  }

  public shouldComponentUpdate(
    nextProps: any,
  ) {
    if (
      this.props.store.roughData.random.active !==
      nextProps.store.roughData.random.active
    ) {
      this.singlePaint('random', true)
    } else if (
      this.props.store.roughData.textToSpeech.active !==
      nextProps.store.roughData.textToSpeech.active
    ) {
      this.singlePaint('textToSpeech', true)
    }

    return true
  }

  public componentDidMount() {
    this.paint()
  }

  public render() {
    const from = this.props.store.fromLanguage
    const to = this.props.store.toLanguage

    return (
      <Container>

        <ChangeLanguage.outer className='change-language'>
          <ChangeLanguage.inner />
          {
            this.props.store.toggleLanguage &&
            <LanguagesComponent
              dispatch={this.props.dispatch}
              currentPair={`${from}${LANGUAGE_SEPARATOR}${to}`}
            />
          }
        </ChangeLanguage.outer>

        <Random.outer className='toggle-random'>
          <Random.inner />
        </Random.outer>

        <TextToSpeech.outer className='toggle-speech'>
          <TextToSpeech.inner />
        </TextToSpeech.outer>
        
        <Submit.outer className='submit-answer'>
          <Submit.inner />
        </Submit.outer>
        
        <Next.outer className='next-instance'>
          <Next.inner />
        </Next.outer>

        <Points id='points'>{this.props.store.points}</Points>
      </Container>
    )
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
