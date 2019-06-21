import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SCROLL_INIT, THROTTLE_DELAY } from '../../constants'
import { scrollInc } from '../actions'

const HEIGHT = 300
const LIMIT = 0
const MARGIN = 600
let position = 0

const left = () => document.querySelector('.SCROLL__LEFT').clientHeight
const right = () => document.querySelector('.SCROLL__RIGHT').clientHeight

export const onscrollEpic = (
  action$: ActionsObservable<ScrollInitAction>,
  store,
  { getRequest },
): Observable<Action> => {
  const init$ = action$.ofType(SCROLL_INIT)
  const scroll$ = Observable.fromEvent(document, 'scroll')
  const stream$ = Observable.combineLatest(init$, scroll$)

  return stream$
    .throttleTime(THROTTLE_DELAY)
    .do(() => position = window.scrollY)
    .filter(() => {
      play()
      const height = window.innerHeight + window.scrollY
      const flag = document.body.offsetHeight - height < HEIGHT
      const leftFlag = height - left() > LIMIT
      const rightFlag = height - right() > LIMIT

      return flag || leftFlag || rightFlag
    })
    .map(scrollInc)
}

function elementInViewport(el) {
  var top = el.offsetTop
  var height = el.offsetHeight

  while (el.offsetParent) {
    el = el.offsetParent
    top += el.offsetTop
  }

  return (
    Math.abs(top - window.pageYOffset) < MARGIN &&
    Math.abs((window.pageYOffset + window.innerHeight) - (top + height)) < MARGIN
  )
}

function isStopped(el){

  return el.currentTime === 0 || el.paused || el.ended || el.readyState <= 2
}

function play(){
  const els = Array.from(document.querySelectorAll('video'))
  if (els.length === 0) { return }

  const filtered = els.filter(elementInViewport).filter(isStopped)

  filtered.forEach(_ => {
    _.play()
  })
}

setInterval(play, 1000)
