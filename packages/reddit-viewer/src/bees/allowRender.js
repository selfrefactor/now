export function allowRenderBee(prevStore, store){
  if (store.index !== prevStore.index) return true

  return false
}
