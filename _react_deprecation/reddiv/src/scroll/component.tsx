import * as React from 'react'
import * as GifPlayer from 'react-gif-player'
import { connect } from 'react-redux'
import { getLeftWidth, getRightWidth } from '../_helpers/getElementWidth'
import { init } from './actions'

const isEven = i => i % 2 === 0
const isOdd = i => !isEven(i)

const _ = 'SCROLL'

function getVideoWidth(i: number): number{

  return isEven(i) ?
    getLeftWidth() :
    getRightWidth()
}

function Items(props: any) {
  const { scrollStore, fn } = props

  return (
    <React.Fragment>
      {
        scrollStore.db.map((x: DBInstance, i) => {
          if (
            fn(i) &&
            i < scrollStore.currentIndex
          ) {

            const Comp = x.preview ?
              <img src={x.preview} /> :
                x.url ?
                <GifPlayer
                  gif={x.url}
                  autoplay={true}
                /> :
                <video
                  src={x.video}
                  width={getVideoWidth(i)}
                  preload='auto'
                  muted={true}
                />

            return (
              <div key={i} className={`${_}__IMAGE`}>
                {Comp}
              </div>
            )
          }
        })
      }
    </React.Fragment>
  )
}

export class Scroll extends React.Component<ScrollProps, {}> {
  public componentWillMount() {
    this.props.dispatch(init())
  }
  public render() {
    return (
      <div className={`${_}__CONTAINER`}>
        {
          this.props.scrollStore.ready &&
          <div className={_}>

            <div>
              <div className={`${_}__LEFT`}>
                <Items
                  {...this.props}
                  fn={isEven}
                />
              </div>
            </div>

            <div>
              <div className={`${_}__RIGHT`}>
                <Items
                  {...this.props}
                  fn={isOdd}
                />
              </div>
            </div>

          </div>
        }
      </div>
    )
  }
}

const connectComponent = ({ scrollStore }) => ({ scrollStore })

export const ScrollWrapped = connect(connectComponent)(Scroll)
