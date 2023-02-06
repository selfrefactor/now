import {compact, last, merge, path, pick} from 'rambdax'

const VIDEO = 'data.secure_media.reddit_video.scrubber_media_url'
const HINT = 'data.post_hint'
const URL = 'data.url'
const GFYCAT = 'https://gfycat.com/'

const isGIF = x => x.data.url.endsWith('.gif')

function isGfycat(input: any) {
  return input.data.url.startsWith(GFYCAT)
}

function filterFn(x: any) {
  const hint: string = path(HINT, x)
  const url: string = path(URL, x)

  return hint === undefined
    ? url !== undefined
    : hint === 'image' ||
        hint === 'hosted:video' ||
        (hint === 'rich:video' && isGfycat(x))
}

function mapFn(x: any) {
  const isVideo = path(HINT, x) === 'hosted:video'

  if (isVideo) {
    return {
      ...pick('title,ups', x.data),
      video: path(VIDEO, x),
    }
  }

  if (isGfycat(x)) {
    return {
      ...pick('title,ups', x.data),
      video: generateVideoURL(x),
    }
  }

  if (isGIF(x)) {
    return pick('title,url,ups', x.data)
  }

  const picked = pick('title,url,ups,post_hint', x.data)
  if (picked.post_hint !== 'image') {
    return
  }

  return merge(picked, {preview: picked.url})
}

function generateVideoURL(input: any) {
  const namespace = last(input.data.url.split('/'))

  return `https://thumbs.gfycat.com/${namespace}-mobile.mp4`
}

export function parseData(response: any): DBInstance[] {
  const children: any[] = path('data.data.children', response)

  const filtered = children.filter(filterFn)
  const mapped = filtered.map(mapFn)

  return compact<DBInstance>(mapped as any)
}
