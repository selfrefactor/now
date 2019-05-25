import { setter, getter, _ } from 'rambdax'

function work(parent, src, id){
  const portal = document.createElement('portal')
  portal.src = src
  parent.appendChild(portal)

  if (id){
    setter(_.PORTAL_SECOND, portal)
    portal.id = 'second'
  } else {
    setter(_.PORTAL, portal)
  }

  parent.appendChild(portal)
}

export async function appendPortalBee({ accepted_answer_id, link }){
  const answer = `${ link }/${ accepted_answer_id }#${ accepted_answer_id }`
  const parent = document.getElementById('portal')
  const parentSecond = document.getElementById('portal-second')

  if (getter(_.PORTAL)){
    parent.removeChild(getter(_.PORTAL))
    parentSecond.removeChild(getter(_.PORTAL_SECOND))
  }

  work(parentSecond, answer)
  work(parent, link, 'second')
}
