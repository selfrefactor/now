import { _ } from 'rambdax'
import { createAction } from 'create-action'
import { dispatcher } from 'reduxed'

export const next = x => dispatcher(createAction('NEXT')(x))
