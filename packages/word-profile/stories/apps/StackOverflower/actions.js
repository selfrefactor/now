const createAction = type => payload => ({
  type,
  payload,
})

export const increment = createAction('INCREMENT_INIT')
export const nextFromUser = createAction('NEXT_FROM_USER')
