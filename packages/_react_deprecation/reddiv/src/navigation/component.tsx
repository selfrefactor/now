import {
  Container,
  Grid,
  Range,
  RangeContainer,
  UplimitContainer,
  } from './styled'

import * as React from 'react'
import { connect } from 'react-redux'

import { rangeChange } from '../root/actions'
import { Uplimit } from './styled'

export class Navigation extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.onRangeChange = this.onRangeChange.bind(this)
  }
  public onRangeChange(e: any) {
    this.props.dispatch(
      rangeChange(Number(e.target.value)),
    )
  }
  public render() {

    return (
      <div>
        {this.props.store.navigationActive &&
          <Container>
            <Grid>

              <RangeContainer>
                <Range
                  min={0}
                  step={10}
                  max={500}
                  onChange={this.onRangeChange}
                  value={this.props.scrollStore.upLimit}
                />
              </RangeContainer>

              <UplimitContainer>
                <Uplimit>
                  {this.props.scrollStore.upLimit}
                </Uplimit>
              </UplimitContainer>
            </Grid>
          </Container>}
      </div>
    )
  }
}

const connectComponent = ({ store, scrollStore }) => ({ store, scrollStore })

export const NavigationWrapped = connect(connectComponent)(Navigation)
