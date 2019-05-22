import { _ } from 'rambdax'
import { createAction } from 'create-action'
import { dispatcher } from 'reduxed'

export const next = () => dispatcher(createAction('NEXT')())
