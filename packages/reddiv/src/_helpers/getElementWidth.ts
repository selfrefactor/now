const holder = {}

interface GetElementWidth{
  selector: string
  label: string
  defaultValue: number
}

export function getElementWidth(input: GetElementWidth){
  if (holder[input.label] !== undefined){

    return holder[input.label]
  }

  const el = document.querySelector(input.selector)

  if (el === null){

    return input.defaultValue
  }

  holder[input.label] = el.clientWidth

  return el.clientWidth
}

export function getLeftWidth(){

  return getElementWidth({
    defaultValue: 450,
    label: 'left',
    selector: '.SCROLL__LEFT',
  })
}

export function getRightWidth(){

  return getElementWidth({
    defaultValue: 450,
    label: 'right',
    selector: '.SCROLL__RIGHT',
  })
}
