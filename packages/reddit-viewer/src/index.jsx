import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import * as Sentry from '@sentry/browser'
Sentry.init({ dsn: 'https://c57bf6cbb9fc431fb3f326f31745f93f@sentry.io/123126' })

export const captureException = x => Sentry.captureException(x)

export class Root extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        root
      </div>
    )
  }
}

render(<Root />, document.getElementById('root'))
