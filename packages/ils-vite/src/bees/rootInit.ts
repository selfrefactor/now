import {
  masterGetter,
  masterSetter,
  resetter,
} from 'client-helpers-fn'
import { pick } from 'rambdax'
import { takeArguments } from 'string-fn'
import { allowedUrlInputs, resetUrlInputs } from '../constants'

export function rootInitBee(){
  resetter(resetUrlInputs)
  const urlInputs = pick<any, any>(
    allowedUrlInputs,
    takeArguments(window.location.href),
  )
  const resetChild = urlInputs.adult ?
    {child: false} :
    {}

  masterSetter({
    ...(masterGetter as any)(),
    ...urlInputs,
    ...resetChild,
  })
}
