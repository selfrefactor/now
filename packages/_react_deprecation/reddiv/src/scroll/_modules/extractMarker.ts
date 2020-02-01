import {last, path} from 'rambdax'

export function extractMarker(response: any): string {
  const children: any[] = path(
    'data.data.children',
    response,
  )

  const lastChildren = last(children)

  return path('data.name', lastChildren)
}
