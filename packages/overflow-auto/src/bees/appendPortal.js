import { setter, getter, _, delay } from 'rambdax'

export async function appendPortalBee({ accepted_answer_id, link }){
  const answer = `${ link }/${ accepted_answer_id }#${ accepted_answer_id }`
  const parent = document.getElementById('portal')
  const parentSecond = document.getElementById('portal-second')

  if (getter(_.PORTAL)){
    parent.removeChild(getter(_.PORTAL))
    parentSecond.removeChild(getter(_.PORTAL_SECOND))
  }
  const portal = document.createElement('portal')
  const portalSecond = document.createElement('portal')
  portal.src = answer
  portalSecond.src = link
  portalSecond.id = 'second'

  parentSecond.appendChild(portalSecond)
  setter(_.PORTAL_SECOND, portalSecond)

  await delay(500)
  parent.appendChild(portal)
  setter(_.PORTAL, portal)
}
