import {
  find,
  pluck,
  uniq,
} from 'rambdax'

export function uniqByTitle(x: DBInstance[]): DBInstance[] {
  const xWithTitles = uniq(pluck('title', x))

  return xWithTitles.map(title => {

    const found = find(
      xInstance => xInstance.title === title,
      x,
    )

    return found
  })
}
